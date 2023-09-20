import React from 'react'

const Table = () => {
    const notice = [
        {
            id:1,
            topic:'ফাইনাল পরীক্ষার জন্য প্রস্তুতি গ্রহণ',
            date:'20/7/23',

        },
        {
            id:1,
            topic:'	বার্ষিক শিক্ষা জরিপ- 2022',
            date:'20/8/23',

        },
        {
            id:1,
            topic:'ইউনিক আইডি তথ্য ফরম জমাদনের সময় যে সকল কাগজ-পত্রাদী জমা দিতে',
            date:'30/7/23',

        },
    ]
  return (
    <div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    ক্রমিক 
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    শিরোনাম 
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    প্রকাশের তারিখ 
                </th>
                <th scope="col" className="px-6 py-3">
                    ডাউনলোড 
                </th>
            </tr>
        </thead>
        <tbody>
            {
                notice.map((not):any=>(
                     <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    ১
                </th>
                <td className="px-6 py-4 text-center text-2xl text-white">
                {not.topic}
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {not.date}
                </td>
                <td className="px-6 py-4">
                   <a href='/topic/id'>
                        hi
                   </a>
                </td>
            </tr>
                ))
            }
           
            {/* <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                   ২
                </th>
                <td className="px-6 py-4">
                ফাইনাল পরীক্ষার জন্য প্রস্তুতি গ্রহণ
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    ৩
                </th>
                <td className="px-6 py-4 text-white">
                ফাইনাল পরীক্ষার জন্য প্রস্তুতি গ্রহণ
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr> */}
            
             
           
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Table