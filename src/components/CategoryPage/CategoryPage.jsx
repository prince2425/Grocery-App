import React from 'react'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Banner from '../Banner/Banner'


const CategoryPage = () => {

const renderProduct = ProductList.map(product=>{
  return(
    <Cards image ={product.image} name={product.name} price={product.price}/>
  )
})

  return (
<div>

  <Banner />

  <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
    {renderProduct}
  </div>
</div>
  )
}

export default CategoryPage