import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import { Database } from './types/database'
import Link from 'next/link'
import {IconBuilding} from '@tabler/icons-react'
import { ListApartament } from './components/table-apartament'
export default async function Home() {
  const supabase = createServerComponentClient<Database>({cookies})
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }
  const {data: apartments} = await supabase.from('apartments').select('*, owner(name, user_name, avatar_url)')

  return (
    <main className="flex  flex-col items-center justify-between">
      <AuthButtonServer />
      <ListApartament apartaments={apartments} />
    </main>
  );
}
