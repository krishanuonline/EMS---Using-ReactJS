import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
    
    return (
        <div className="p-10 bg-[#1c1c1c] h-screen">
            <Header/>
            <TaskListNumbers/>
            <TaskList/>
        
        </div>
    );
};
export default EmployeeDashboard;