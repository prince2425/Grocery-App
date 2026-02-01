import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'


const Discount = () => {
  return (
    <section className='bg-zinc-100 max-w-[95vw] mx-auto px-10 bg-no-repeat bg-right bg-contain' style={{backgroundImage:`url(${FreshFruits})`}}>
        <div className='flex md:flex-row flex-col  py-10 '>
            <span className='md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
            <div className='max-w-[700px]'>
                <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold'>First Order <br /> Discount !</h3>
                <p className='text-zinc-600 my-6'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delevery and quality guaranteed.</p>
                <Button content='Get a Discount' />
            </div>
        </div>
    </section>
  )
}

export default Discount