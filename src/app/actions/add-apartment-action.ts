'use server'

import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache';

export const addApartment = async (formData: FormData) => {
    const name = formData.get('floating_name');
    const location = formData.get('floating_location');
    const price = formData.get('floating_price');
    const description = formData.get('floating_description');
   
    if (name  === null) return
   
    const supabase = createServerActionClient({cookies})
    //revisamos si el dueño esta conectado
    const {data : {user}}  = await supabase.auth.getUser();
    if (user  === null) return
    
    await supabase.from('apartments').insert({name, location, price, description, owner_id : user.id})
 
    revalidatePath(`/`)
}