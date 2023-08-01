import React from 'react'
import useMenu from '../../hooks/useMenu';

const FoodCard = ({item}) => {

    const { image, price, recipe, name } = item;
    const [loading] = useMenu()
    


  return (
   
      <div className="card w-96 bg-base-100 shadow-xl">

          <figure><img src={image} alt="Shoes" /></figure>
          <p className='bg-slate-900 text-white absolute right-0 mr-4px-4 '>${price}</p>
          <div className="card-body">
              <h2 className="card-title flex flex-cols items-center ">{name}</h2>
              <p>{recipe}</p>
              <div className=" flex flex-cols items-center">
                  <button className="btn btn-primary">Add to cart</button>
              </div>
             
          </div>
      </div>
  )
}

export default FoodCard