'use client'

import { IconBuilding } from "@tabler/icons-react";
import { Apartments } from "../types/apartament";
import Link from "next/link";
import { useState } from "react";
import {Modal} from "./ModalApartment";

export function ListApartament ({ apartaments }: { apartaments: Apartments[] | null }){
    const [mostrarDiv, setMostrarDiv] = useState(false);

        const toggleDiv = () => {
            setMostrarDiv(!mostrarDiv);
        };


    return(
        <>
         {mostrarDiv ? (
                <><Modal /><button onClick={toggleDiv} type="button" className="text-gray-900 bg-blue hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                    Cancel
                </button></>
                ) : (
                <div className="relative overflow-x-auto">
                    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                        <div>
                            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <span className="sr-only">Action button</span>
                                Apartaments
                            </button>
        
                        </div>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="flex  flex-col  justify-between">
                            
                            <button onClick={toggleDiv} type="button" className="text-gray-900 bg-blue hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                                <IconBuilding className='w-4 h-4' />
                                    Add
                                    
                            </button>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Location
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        rooms
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <>
                                    {apartaments?.map(apartment => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {apartment.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {apartment.location}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {apartment.price}
                                            </td>
                                            <td className="px-6 py-4">
                                                {apartment.description}
                                            </td>
                                            <td>
                                                <Link href={{ pathname: '/room', query: { apartmet: apartment.id } }}>
                                                    rooms
                                                </Link>
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
{/* <div className="relative overflow-x-auto">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Action button</span>
                Apartaments
            </button>
            
          </div>
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative">
            <button data-modal-target="extralarge-modal" data-modal-toggle="extralarge-modal" className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-40" type="button">
              <IconBuilding className='w-4 h-4'/> Add Apartament
            </button> 
              
          </div>
        </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Location
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                          description
                      </th>
                      <th scope="col" className="px-6 py-3">
                          rooms
                      </th>
                  </tr>
              </thead>
              <tbody>
                <>
                  {
                    apartments?.map(apartment => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {apartment.name}
                        </th>
                        <td className="px-6 py-4">
                              {apartment.location}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {apartment.price}
                        </td>
                        <td className="px-6 py-4">
                            {apartment.description}
                        </td>
                        <td>
                        <Link href={`/rooms?id=${apartment.id}`}>
                          rooms
                        </Link>
                        </td>
                      </tr>
                    ))
                  }
                </> 
              </tbody>
          </table>
      </div> */}