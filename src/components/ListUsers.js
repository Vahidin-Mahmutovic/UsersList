import { useGlobalContext } from "../context";
import UserData from "./UserData";
import Loading from "./Loading";
import Pagination from "./Pagination";

function ListUsers() {
  const {search,loading,newUsersArray} = useGlobalContext()
  
  if (loading) {
    return <Loading/>
  }
  
  return (
<>
      <table className="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Company</th>
            </tr>
            </thead>
    <tbody>
      
    {newUsersArray.filter((item)=>{
      return search.toLowerCase() === '' ? item : item.address.city.toLowerCase().includes(search)
    }).map((item)=>{
      return(
        <UserData key={item.id} {...item}/>
      )
      })}
   
    </tbody>
    </table>
      <Pagination/>
  </>  
  );
}

export default ListUsers;

