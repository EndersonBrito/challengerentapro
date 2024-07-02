
import { useSearchParams } from 'next/navigation';

export  function getUrlParam(param){
    'use client'
    const searchParam  = useSearchParams()
    return searchParam.get(param)
}