'use client'
import React from 'react'
import TeacherCard from '@/components/TeacherCard'
const page = () => {
    return (
        <>
            <div className='container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              
                <TeacherCard/>
                <TeacherCard/>
                <TeacherCard/>
                <TeacherCard/>
                <TeacherCard/>
                <TeacherCard/>
                
            </div>
        </>
    )
}

export default page