import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

    // const authData = useContext(AuthContext);
    const [userData, setUserData] = useContext(AuthContext);
    
    return (
        <div className="bg-[#1c1c1c] p-5 mt-5 rounded">

            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5">New Task</h3>
                <h5 className="text-lg font-medium w-1/5">Active Task</h5>
                <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
                <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
            </div>

            <div > 

               
                {userData.map((e,i)=>{
                    
                    return(
                        <div key={i} className="border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
                            <h2 className="text-lg font-medium w-1/5 text-white">{e.firstName}</h2>
                            <h3 className="text-lg font-medium w-1/5 text-blue-400">{e.taskCounts.newTask}</h3>
                            <h5 className="text-lg font-medium w-1/5 text-yellow-400">{e.taskCounts.active}</h5>
                            <h5 className="text-lg font-medium w-1/5 text-green-400">{e.taskCounts.completed}</h5>
                            <h5 className="text-lg font-medium w-1/5 text-red-400">{e.taskCounts.failed}</h5>
                        </div>
                    )
                })}

            </div>

            
        </div>
    );
};
export default AllTask;