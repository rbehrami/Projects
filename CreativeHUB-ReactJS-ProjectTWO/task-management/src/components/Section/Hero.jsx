import React from 'react'
import LoginButton from '../../slices/LoginButton'

const Hero = () => {
  return (
    <section className='bg-neutral-silver py-33'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <h1 className='headline-1'>Detyrat ditore menaxhohen shume lehte<span className='block text-green-500'>Me Aplikacionin e duhur</span></h1>
                <p className='text-neutral-gray mt-2 py-8'>Kycu dhe Menaxho detyrat tuaja ditore</p>
                <LoginButton />
            </div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/023/234/620/small/man-standing-in-front-of-large-form-paper-illustration-of-cartoon-man-filling-out-a-form-task-management-completion-free-png.png" alt="" />
        </div>
    </section>
  )
}

export default Hero
