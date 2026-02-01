import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from '../../assets/basket-full-vegetables.png'

//............................our values....................................

const values = [
    {
        id:1,
        title:'Trust',
        para:'It is a long established fact that a reader will be distracted by the readable.',
        icon:<FaHeart />
    },
    {
        id:2,
        title:'Always Fresh',
        para:'It is a long established fact that a reader will be distracted by the readable.',
        icon:<FaLeaf />
    },
    {
        id:3,
        title:'Food Safety',
        para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon:<FaShieldAlt />
    },
    {
        id:4,
        title:'100% Organic',
        para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon:<FaSeedling />
    },
]

const Values = ()=> {
    const leftValues = values.slice(0,2).map(item=>{
        return(
            <div key={item.id} className='flex md:flex-row-reverse item-center gap-7'>
                <div>
                    <span className='flex justify-center items-center md:text-3xl text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 md:w-15 w-10 md:h-15 h-10 rounded-full'>{item.icon}</span>
                </div>

                <div className='md:text-right'>
                    <h3 className='text-zinc-800 md:text-3xl text-2xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

    const rightValues = values.slice(2).map(item=>{
        return(
            <div key={item.id} className='flex item-center gap-7'>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div className=''>
                    <h3 className='text-zinc-800 md:text-3xl text-2xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })


  return (
    <section>
        <div className='max-w-[95vw] mx-auto md:px-10 px-2 py-20'>
            <Heading highlight="Our" heading="values" />

            <div className='flex md:flex-row flex-col md:gap-5 gap-15 mt-15'>

                {/* left values */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {leftValues}
                </div>

                {/* center image */}
                <div className='w-1/2 md:flex hidden'>
                    <img src={Basket}  />
                </div>

                {/* right values */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {rightValues}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values
