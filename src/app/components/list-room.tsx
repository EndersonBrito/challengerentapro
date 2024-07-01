'use client'

import { IconBuilding } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { Rooms } from "../types/room";
import { ModalRoom } from "./modal-room";

export function ListRooms ({ rooms }: { rooms: Rooms | null }){
    const [mostrarAddRoom, setMostrarAddRoom] = useState(false);

        const toggleAddRoom = () => {
            setMostrarAddRoom(!mostrarAddRoom);
        };


    return(
        <>
         {mostrarAddRoom ? (
                <><ModalRoom /><button onClick={toggleAddRoom} type="button" className="text-gray-900 bg-blue hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                    Cancel
                </button></>
                ) : (
                <div className="relative overflow-x-auto">
                    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                    <div>
                        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Action button</span>
                        Rooms

                        </button>

                    </div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <button  onClick={toggleAddRoom} data-modal-target="extralarge-modal" data-modal-toggle="extralarge-modal" className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Add Room
                        </button>

                    </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                        <th scope="col" className="px-6 py-3">
                            apartment name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            room name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            equipment
                        </th>
                        <th scope="col" className="px-6 py-3">
                            size
                        </th>
                        <th scope="col" className="px-6 py-3">
                            image
                        </th>

                        </tr>
                    </thead>
                    <tbody>
                        <>
                        {rooms?.map(room => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {room.apartments?.id}
                            </th>
                            <td className="px-6 py-4">
                                {room.name}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {room.equipment}
                            </td>
                            <td className="px-6 py-4">
                                {room.size}
                            </td>
                            <td className="px-6 py-4">
                                {room.image_url}
                            </td>
                            </tr>
                        ))}
                        </>
                    </tbody>
                    </table>
                </div>  
            )}    
        
        
    </>
        
    ) 
}
