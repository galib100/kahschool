import Carousel from '@/components/Carousel'
import DemoCard from '@/components/DemoCard'
import Slide from '@/components/Slide'
import TeacherCard from '@/components/TeacherCard'

export default function Home() {
  return (
    <main className="">
      <div className='container bg-white mx-auto'>
        {/* <Slide /> */}
        
        <Carousel/>
        <h1> Hi </h1>
        <div className='flex '>
          <div className='bg-blue-400 flex-grow'>
          <DemoCard/>
          </div>
          <div className='flex-shrink px-2 w-96 m-1'>
          <TeacherCard/>
          <TeacherCard/>
          
          </div>
        </div>
      </div>
    </main>
  )
}
