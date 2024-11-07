const AcceptTask = () => {
    
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-500 rounded-xl"> 
            <div className="flex justify-between">
                <h3 className="bg-red-600 px-3 py-1 rounded-lg font-bold text-sm">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Create a react project</h2>
            <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veniam magnam et, enim voluptatem tempore nemo explicabo magni voluptatum dolorum.
            </p>

            <div className="flex justify-between mt-4">
                <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
                <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
            </div>
        </div>
    );
};
export default AcceptTask