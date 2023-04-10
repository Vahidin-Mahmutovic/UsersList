import React from 'react'
import { useGlobalContext } from '../context'


const SearchForm = () => {

  const {setSearch} = useGlobalContext()
  
  return(
      <div className='search-container'>
      <form className='form'>
        <input type='text' placeholder='Search by city' onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      </div>
    )
   
  
}

export default SearchForm
 

 