import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({data}) => {
    
    return (
        <div id="taskList" className="h-[56%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap mt-12 py-5 px-2">
            
            {data.tasks.map((e,i)=>{
                 if(e.active){
                    return <AcceptTask key={i} data={e}/>
                 }
                 if(e.newTask){
                    return <NewTask key={i} data={e} />
                 }
                 if(e.completed){
                    return <CompleteTask key={i} data={e}/>
                 }
                 if(e.failed){
                    return <FailedTask key={i} data={e}/>
                 }
            })}
          

            

          

        </div>
    );
};
export default TaskList;