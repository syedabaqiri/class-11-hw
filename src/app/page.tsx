import React from 'react'
import Image from 'next/image'
import Car from '@/components/Car'

const page = () => {
  const cars = [
    {
      carImage:"/car2.jpeg",
      carName:"Honda city",
      carPrice: "3293722",
      carReviews:"3.4/5",
    },
    {
      carImage:"https://images.pexels.com/photos/27792787/pexels-photo-27792787/free-photo-of-land-rover-difender.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      carName:"Land Rover",
      carPrice: "98293722",
      carReviews:"3.9/5",
    },
    {
      carImage:"https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=400",
      carName:"BMW",
      carPrice: "31393722",
      carReviews:"4.6/5",
    },
    {
      carImage:"https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=400",
      carName:"Black Lamborghani",
      carPrice: "98293722",
      carReviews:"5/5",
    }
  ];

  return (
    <div className=''>
      <h1 className='text-stone-500 text-center p-10 rounded bg-slate-400 shadow-lg'>Cars YOU LIKE</h1>
      <div className='flex gap-4 rounded-md shadow-xl text-center border-l-2'>
        {cars.map((car,index) => (
          <Car 
            
            key={index}
            carImage={car.carImage}
            carName={car.carName}
            carPrice={car.carPrice}
            carReviews= {car.carReviews}

            
            
            
            />
        )
        
        
        )}
      </div>
    </div>
  )
  


  
  
}

export default page