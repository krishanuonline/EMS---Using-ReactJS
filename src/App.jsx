import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

function App() {

  const [user,setUser] = useState(null);
  const [loggedInUserData,setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  

  // useEffect(()=>{
  //   if(authData){
  //     const loggedinUser = localStorage.getItem("loggedInUser");
  //     if (loggedinUser) {
  //       setUser(loggedinUser.role);
  //     }
  //   }

  // },[authData])

  const handleLogin = (email,password)=>{
    if(!authData){
      return;
    }
    if(email == 'admin@ems.com' && password == '123'){
      setUser("admin");
      localStorage.setItem("loggedinUser",JSON.stringify({role:"admin"}))
    }else if(authData){
      const employee = authData[0].employees.find((e)=> email == e.email && password == e.password);
      if(employee){
        setUser("employees");
        setLoggedInUserData(employee)
        localStorage.setItem("loggedinUser",JSON.stringify({role:"employees"}))

      }

    }else{
      alert("Invalid Credential!!");
    }
  }

  
  

  return (
    <>
    
      {!user ? <Login handleLogin={handleLogin}/> : null}
      {user=='admin'? <AdminDashboard/> : user=="employees"?  <EmployeeDashboard data = {loggedInUserData}/> : null}
     
    </>
  )
}

export default App
