import { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = ({data}) => {
    // const [username, setUsername] = useState("")

    // if(!data){
    //     setUsername("Admin")
    // }else{
    //     setUsername(data.firstName)
    // }
    const logoutUser = ()=>{
        localStorage.setItem("loggedinUser","")
        window.location.reload()
    }
    return (
        <div className="flex items-end justify-between bg-transparent">
            <h1 className="text-2xl font-medium">Hello! <br /> <span className="text-3xl font-semibold"> 👋</span> </h1>
            <button onClick={logoutUser} className="bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-md">Logout</button>
        </div>

    );
};
export default Header;