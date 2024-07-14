import { UserContext } from "../../contexts/user";
import { useContext } from "react";
const User = () => {
    const {username} = useContext(UserContext)
    return (
      <div className="App">
        <h1>Vamos falar sobre o </h1>
        <button>Mudar nome</button>
      </div>
    );
  }
  
  export default User;
  