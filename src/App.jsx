import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

function App() {

  const [user,setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(()=>{
    if(authData){
      const loggedinUser = localStorage.getItem("loggedInUser");
      if (loggedinUser) {
        setUser(loggedinUser.role);
      }
    }

  },[authData])

  const handleLogin = (email,password)=>{
    if(email == 'admin@ems.com' && password == '123'){
      setUser('admin');
      localStorage.setItem("loggedinUser",JSON.stringify({role:"admin"}))
    }else if(authData && authData.employees.find((e)=> email == e.email && password == e.password)){
      setUser('employee');
      localStorage.setItem("loggedinUser",JSON.stringify({role:"employee"}))

    }else{
      alert("Invalid Credential!!");
    }
  }

  
  

  return (
    <>
    
      {!user ? <Login handleLogin={handleLogin}/> : ""}
      {user=='admin'? <AdminDashboard/> : user == 'employee' ? <EmployeeDashboard/> : ''}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
