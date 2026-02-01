import React ,{useState} from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'
import { Link} from 'react-router-dom'

const Products = () => {

  const categories= ['All', 'Fruits', 'Vegetables', 'Dairy','SeaFood']
  const [activeTab,setActiveTab]= useState('All');

let filteredItems = activeTab === 'All'? ProductList : ProductList.filter(item=>item.category === activeTab);


  const renderCards = filteredItems.slice(0,8).map(product=>{
    return(
      <div key={product.id}>
      <Cards image={product.image} name={product.name} price={product.price}/>
      </div>
    )
  })

  return (
    <section>
        <div className='max-w-95vw mx-auto px-10 py-20'>
            <Heading highlight='Our' heading='Products'/>

            {/* Tabs */}

            <div className='flex flex-wrap gap-3 justify-center mt-10'>
              {categories.map(category=>{
                return(
                  <button key={category} 
                  className={` px-5 py-2 text-lg rounded-lg cursor-pointer
                  ${activeTab === category ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white':'bg-zinc-100'}`}
                  onClick={()=>setActiveTab(category)}>
                    {category}
                  </button>
                )
              })}
            </div>

            {/* Product list */}
            <div className=' grid md:grid-cols-4 grid-cols-1 gap-9 mt-18'>
             { renderCards}
            </div>

            <div className='mt-15 mx-auto w-fit'>
              {/* <Button content='View All' /> */}
              <Link
          // to="/fruits"
          to='/allproducts'
          className="bg-linear-to-b from-orange-400 to-orange-500 text-white md:px-8 px-5 md:py-2 py-2 rounded-lg 
        md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300  cursor-pointer"
        >
          View All
        </Link>
            </div>

        </div>
    </section>
  )
}

export default Products