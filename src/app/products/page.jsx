import ProductCard from '@/components/ProductCard';
import React from 'react'

export const metadata = {
  title: "CARD Oson PRAVA",
  description: "Prava olishga yordam , osonprava, OSON, PRAVA OLISH ",
};

async function Products({ el }) {

  const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=10&offset=1" , {
    cache: "force-cache",
    next:{
      revalidate: 3600
    }
  });
  const result = await res.json();


  return (  
    <>
      <div className='conatiner mx-auto grid grid-cols-4 gap-[20px] py-[90px] '>
        {result?.map((el) => (
          <ProductCard key={el.id} el={el} />

        ))}
      </div>
    </>
  )
}

export default Products
