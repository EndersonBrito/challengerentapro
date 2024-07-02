
import { AuthButtonServer } from '@/app/components/auth-button-server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/database'
import { cookies } from 'next/headers'
import { redirect   } from 'next/navigation'
import { ListRooms } from '../components/list-room'
export const dynamic = 'force-dynamic'
export default async function Room () {

  const supabase = createServerComponentClient<Database>({cookies})
  const { data: { session } } = await supabase.auth.getSession()
  
  if (session === null) {
    redirect('/login')
  }
  const {data: rooms} = await supabase.from('rooms').select('*, apartments(name, id)')

  return (
    <section className="flex  flex-col items-center justify-between">
    <AuthButtonServer />
    <ListRooms rooms={rooms}/>
    </section>
  )
}
