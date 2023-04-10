import { createContext, useContext, useState, useEffect } from "react";


const url = 'https://jsonplaceholder.typicode.com/users'
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext)


const AppContext = ({children}) => {
    const [users, setUser] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const usersPerPage = 5;
   

    const fetchUsers = async () =>{
            setLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()
            setUser(data)
            setLoading(false)   
        }catch(error){
            console.log(error)
            
        }
    }
    
    useEffect(()=>{
        fetchUsers()
    },[search])

    
    const lastIndex = currentPage * usersPerPage
    const firstIndex = lastIndex - usersPerPage
    const newUsersArray = users.slice(firstIndex,lastIndex)
    const npage = Math.ceil(users.length / usersPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
   
    return(
        <GlobalContext.Provider value={{users,
                                        search,
                                        setSearch,
                                        loading,
                                        numbers,
                                        newUsersArray,
                                        setCurrentPage,
                                        currentPage,
                                        npage
                                        }}>
            {children}
        </GlobalContext.Provider>
    ) 
    
}

export default AppContext