import React from 'react'
import { clsx } from 'clsx'

export const formbox=clsx(
     'flex' ,
      'justify-center',
      'items-center',
      'backdrop-blur-md',
       'bg-white shadow-md',
        'md:w-100', 
        'h-140',
        "px-4",
         'w-120',
          'lg:w-1/2',
           'lg:h-120',
            'rounded-md bg'
)

export const label=clsx(
    ' m-2',
    ' block',
    'text-sm'
)
export const input=clsx(
    "border-1", 
    'block',
     'outline-none', 
     'rounded-sm', 
     'py-2', 
     'px-2',
        
       'w-80',
)

export const smbut=clsx(
    'bg-blue-300',
     "mx-2",
      'my-1',
       'rounded-md',
       "w-10",
        'py-1',
         'px-1',
)

export const button=clsx(
    'bg-blue-300',
     'block',
      'my-3',
       'rounded-md',
        'py-1',
         'px-2',
)

export const inputerror= clsx(
    'text-xs',
    'text-red-300'
)