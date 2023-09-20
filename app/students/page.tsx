'use client'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Banner from '@/components/Banner'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let categories =[
      {
        id: 1,
        cls:'৬ষ্ঠ শ্রেণি ',
        boy: '10',
        girl: '20',
        sch: 5,
        shareCount: 2,
      },
      {
        id :'2',
        cls :'৭ম শ্রেণি ',
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        cls:'৮ম শ্রেণি ',
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        cls:'৯ম শ্রেণি ',
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        cls:'১০ম শ্রেণি ',
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
  ]

  return (
    <>
    <Banner/>
    <div className="w-full mx-auto max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        
        {  categories.map((cat:any)=>(
            <Tab
              key={cat.id}
              className={({ selected }:any) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {cat.cls}
            </Tab>
          ))
}
         
        </Tab.List>
        {categories.map((post:any) => (
        <Tab.Panels className="mt-2">
          
         
            <Tab.Panel
              key={post.id}
              className={classNames(
                'rounded-xl bg-blue-900 p-3',
                'ring-white ring-opacity-80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-blue-600-100 text-3xl"
                  >
                    <h3 className=" font-medium  ">
                     ছেলেঃ  {post.boy} জন 
                     
                    </h3>
                    <h3 className=" font-medium ">
                     মেয়েঃ   {post.girl} জন 
                     
                    </h3>
                    <h3 className=" font-medium ">
                     উপবৃত্তি:    {post.girl} জন 
                     
                    </h3>
                   
                  </li>
                 
              </ul>
            </Tab.Panel>
        </Tab.Panels>
          ))}
      </Tab.Group>
    </div>
    </>
  )
}
