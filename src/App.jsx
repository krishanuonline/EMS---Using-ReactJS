import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider"

function App() {

  const [user,setUser] = useState(null);
  const [loggedInUserData,setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  
    useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedinUser");
      if (loggedInUser) {  
        const userData = JSON.parse(loggedInUser);
        if (userData && userData.role) {
          setUser(userData.role);
          setLoggedInUserData(userData.data);
        }
      }
    }, []);

  const handleLogin = (email,password)=>{
    
    if(email == 'admin@ems.com' && password == '123'){
      setUser("admin");
      localStorage.setItem("loggedinUser",JSON.stringify({role:"admin"}))
    }else if(userData){
      const employee = userData.find((e)=> email == e.email && password == e.password);
      if(employee){
        setUser("employees");
        setLoggedInUserData(employee)
        localStorage.setItem("loggedinUser",JSON.stringify({role:"employees", data:employee}))

      }

    }else{
      alert("Invalid Credential!!");
    }
  }

  return (
    <>
    
      {!user ? <Login handleLogin={handleLogin}/> : null}
      {user=='admin'? <AdminDashboard changeUser={setUser}/> : user=="employees"?  <EmployeeDashboard data = {loggedInUserData} changeUser={setUser}/> : null}
     
    </>
  )
}

export default App
