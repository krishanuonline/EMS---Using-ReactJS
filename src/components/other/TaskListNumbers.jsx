const TaskListNumbers = (props) => {
    console.log("ddddddddddddd",props.data)
    
    return (
        <div className="flex justify-between gap-5 screen">
            <div className="w-[45%] bg-red-500 mt-5 py-5 px-10 rounded-xl">
                <h2 className="text-3xl font-semibold">{props.data.taskCounts.newTask}</h2>
                <h3 className="text-xl font-semibold">New Task</h3>
            </div>

            <div className="w-[45%] bg-green-500 mt-5 py-5 px-10 rounded-xl">
                <h2 className="text-3xl font-semibold">{props.data.taskCounts.completed}</h2>
                <h3 className="text-xl font-semibold">Completed Task</h3>
            </div>

            <div className="w-[45%] bg-blue-500 mt-5 py-5 px-10 rounded-xl">
                <h2 className="text-3xl font-semibold">{props.data.taskCounts.active}</h2>
                <h3 className="text-xl font-semibold">Accepted Task</h3>
            </div>

            <div className="w-[45%] bg-yellow-500 mt-5 py-5 px-10 rounded-xl">
                <h2 className="text-3xl font-semibold">{props.data.taskCounts.failed}</h2>
                <h3 className="text-xl font-semibold">Failed Task</h3>
            </div>

        </div>
    );
};
export default TaskListNumbers;