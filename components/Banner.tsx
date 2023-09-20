import React from 'react'

const Banner = () => {
  return (
    <div>
        <div>
        {/* <motion.section
          className="relative h-96 md:h-80 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        > */}
          <img
            src="/file.jpeg"
            alt="About Us"
            className="object-cover filter blur-sm h-96 md:h-80 w-full"
           
          />
          <div className=" inset-0 flex items-center justify-center text-blue-800  text-3xl md:text-4xl font-semibold">
            <p className=' bg-white '> কাজী আলাউদ্দীন মাধ্যমিক বিদ্যালয়ের শিক্ষার্থী তথ্য</p>
          </div>
        {/* </motion.section> */}
      </div>
    </div>
  )
}

export default Banner