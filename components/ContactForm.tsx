import React from 'react'
import { motion } from 'framer-motion';

const ContactForm = () => {
    
  return (
    <div>
        <div>
        <motion.section
        className="container mx-auto p-8 md:p-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl text-center font-semibold mb-8">Contact Us</h1>
         
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
        </div>
    </div>
  )
}

export default ContactForm