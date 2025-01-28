import React from 'react'

interface CarProps{
    carImage :string;
    carName: string;
    carPrice: string;
    carReviews:string;
}

const Car = ({carImage,carName,carPrice,carReviews}:CarProps) => {
  return (
    <div>
        <img className ="w-full h-3/5 rounded-lg shadow-md m-4 mx-4"src = {carImage} alt= {carName}/>
        <h2>Name: {carName}</h2>
        <p> Price: {carPrice}</p>
        <p>reviews: {carReviews}</p>

    </div>
  )
}

export default Car