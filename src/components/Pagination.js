import React from 'react'
import { useGlobalContext } from '../context'

const Pagination = () => {
  const {numbers,setCurrentPage,currentPage,npage} = useGlobalContext()
 
    return (
    <nav>
        <ul>
           <li >
            <a href='#'  onClick={prePage}>Prev</a>
           </li>
           {
            numbers.map((number,index)=>{
                return(<li  key={index}>
                    <a className={currentPage === number ? 'active' : ''} href='#' onClick={()=> changeCPage(number)}>
                        {number}
                    </a>
                </li>)
            })
           }
           <li >
            <a href='#' onClick={nextPage}>Next</a>
           </li>
        </ul>
    </nav>
  
  )

  function prePage() {
    if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
    }
  
  }

  function changeCPage (index) {
    setCurrentPage(index)

  }
  
  function nextPage() {
    if(currentPage !== npage){
        setCurrentPage(currentPage + 1)
        
    }
   
    
    
  }


}

export default Pagination