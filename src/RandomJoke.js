import React, { useState } from 'react'

const RandomJoke = () => {
    const [joke,setJoke] = useState();
    const [loading,setLoading] = useState();
    const fetchJoke = async() =>{
        try{
            const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        }catch{

        }
    }
  return (
    <div className='inner-container'>
        
    </div>
  )
}

export default RandomJoke