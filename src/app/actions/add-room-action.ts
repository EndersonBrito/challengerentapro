'use server'

import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache';
import { join } from 'path';
import { writeFile } from 'fs/promises';

export const addRoom = async (formData: FormData) => {
    const name = formData.get('room_name');
    const apartment_id = formData.get('id_apartament');
    const equipment = formData.get('room_equipament');
    const size = formData.get('room_size');
    const image_url = formData.get('file');
  
    const buffer = Buffer.from(await image_url.arrayBuffer());
    const path = join("apartamet", apartment_id ,'/', image_url.name.replace(" ", "-"));
  try {
    if (name  === null) return
    const supabase = createServerActionClient({cookies})
    const imageName = image_url.name.replace(" ", '')
    //revisamos si el dueño esta conectado
    const {data : {user}}  = await supabase.auth.getUser();
    if (user  === null) return
     await supabase.storage
      .from('apartament')
      .upload(  imageName,buffer, {
        contentType: 'image/jpeg',
      })
      const urlImg = supabase.storage.from('apartament').getPublicUrl(imageName);
       const publicUrlImg =urlImg.data.publicUrl
      await supabase.from('rooms').insert({name, equipment, size,image_url: publicUrlImg, apartment_id : apartment_id})

    } catch (error) {
      // Capture the error message to display to the user
    
      console.error("error")
      console.error(error)
    } 
    
    revalidatePath(`/room`)
}