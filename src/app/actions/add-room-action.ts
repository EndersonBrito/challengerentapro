'use server'

import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache';

export const addRoom = async (formData: FormData) => {
    const name = formData.get('room_name');
    const room_equipament = formData.get('room_equipament');
    const room_price = formData.get('room_price');
    const room_image = formData.get('room_image');
    console.log("name");
    if (name  === null) return
    console.log(room_image);
    const supabase = createServerActionClient({cookies})
    //revisamos si el dueño esta conectado
    const {data : {user}}  = await supabase.auth.getUser();
    if (user  === null) return
    console.log("user");
    console.log(user.id);
    
    /*await supabase.from('rooms').insert({name, room_equipament, room_price, room_image, owner_id : user.id})
     await supabase.storage
        .from('apartament')
        .upload(files.image.originalFilename, fileContent, {
          contentType: files.image.mimetype,
          cacheControl: '3600',
        });
    console.log("room_equipament");
    console.log(room_equipament);
    console.log("price");
    console.log(price);
    console.log("description");
    console.log(description);*/
    revalidatePath(`/room`)
}