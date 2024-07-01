'use server'

import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache';

export const addApartment = async (formData: FormData) => {
    const name = formData.get('floating_name');
    const location = formData.get('floating_location');
    const price = formData.get('floating_price');
    const description = formData.get('floating_description');
    console.log("name");
    if (name  === null) return
    console.log(name);
    const supabase = createServerActionClient({cookies})
    //revisamos si el dueño esta conectado
    const {data : {user}}  = await supabase.auth.getUser();
    if (user  === null) return
    console.log("user");
    console.log(user.id);
    
    await supabase.from('apartments').insert({name, location, price, description, owner_id : user.id})
    console.log("location");
    console.log(location);
    console.log("price");
    console.log(price);
    console.log("description");
    console.log(description);
    revalidatePath(`/`)
}