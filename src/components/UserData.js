import React from 'react'


const UserData = ({name,address,phone,company}) => {
   
  return (
    <>
         
            <tr>
                <td>{name}</td>
                <td>{`${address.street}, ${address.suite}, ${address.city}`}</td>
                <td>{phone}</td>
                <td>{company.name}</td>
             </tr>
          
         
             
        
    </>
  )
}

export default UserData