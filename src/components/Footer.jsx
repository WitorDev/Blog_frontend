import React from 'react'

export default function Footer() {
  return (
        <div className='lg:max-w-screen-lg w-full flex justify-center items-center flex-col'>
            <footer className='rounded-lg mt-20 w-full h-full bg-gray-800 text-white p-4 text-center'>
                <p>&copy; {new Date().getFullYear()} Witor Tenã</p>
                <div>
                    <a href="https://github.com/WitorDev" className="text-gray-400 hover:text-white mx-2">Witor's Github</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">This project</a>
                </div>
            </footer>
        </div>
  )
}
