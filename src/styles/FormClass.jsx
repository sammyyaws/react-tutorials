import React from 'react'
import { clsx } from 'clsx'

export const formbox=clsx(
     'flex' ,
      'justify-center',
      'items-center',
      'backdrop-blur-md',
       'bg-white shadow-md',
        'md:w-1/2', 
        'h-80',
         'w-60',
          'lg:w-1/4',
           'lg:h-1/2',
            'rounded-md bg'
)

export const label=clsx(
    ' m-2',
    ' block'
)
export const input=clsx(
    "border-1", 
    'block',
     'outline-none', 
     'rounded-sm', 
     'py-1', 
     'px-2',
       'h-full', 
       'w-full',
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
    'text-xs'
)