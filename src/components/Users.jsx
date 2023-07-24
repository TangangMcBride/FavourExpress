import Header from "./Header";
import Usercard from "./Usercard";
import {users} from "../constant"

const Users = () => {
    return ( 
        <div className="py-16">
            <Header
            name="Users"
            />
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {users.map((user) => (
        <Usercard
          key={user.id}
          image={user.image}
          name={user.name}
          occupation={user.occupation}
        />
      ))}
    </div>

        
            
        </div>

     );
}
 
export default Users;