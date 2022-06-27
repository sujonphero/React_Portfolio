import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <section>
        <main className='flex flex-col justify-center items-center py-20 space-y-2'>
            <h1 className='text-3xl text-slate-600 font-bold'>

            <Typed
                    strings={['Hi, This is Sujon Sheikh']}
                    typeSpeed={80}
                    backSpeed={80}
                    loop 
                />
                
            </h1>

            <h2 className='text-2xl text-slate-500 animate-pulse'>
                I'm Frontend Developer
            </h2>

            <p className='max-w-[400px] md:max-w-[600px] mx-auto text-xl text-slate-600 px-4 text-center'>
            <span className='text-3xl font-semibold text-slate-500'>H</span>ello I’m Sujon Sheikh. A passionate <span className='text-slate-800'>web developer</span>. I develop web applications. My core skill is based on <span className='font-medium underline'>javascript</span>, and I love to do most of things using javascript. I love to learning new technology and explore more.
            </p><br />

            <button className='font-medium text-white border rounded-lg bg-blue-500 hover:bg-green-500 px-4 py-1 shadow-xl duration-300'>See Works</button>
        </main>
    </section>
  )
}

export default Hero