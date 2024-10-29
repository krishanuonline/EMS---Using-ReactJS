import { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log("Email :",email,"Password: ",password);
        handleLogin(email,password);

        

        //reset
        setEmail("");
        setPassword("");

    }


    return (

        <div className="flex items-center justify-center h-screen w-screen bg-[#1c1c1c]">
            <div className="border-2 border-emerald-400 p-20 rounded-xl">
                <form className="flex flex-col items-center justify-center" onSubmit={(e)=>submitHandler(e)}>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border-2 border-emerald-400 py-3 px-5 rounded-3xl text-xl text-white outline-none placeholder:text-gray-400 bg-transparent" type="email" placeholder="Enter your Email" />
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className="border-2 border-emerald-400 py-3 px-5 rounded-3xl text-xl text-white outline-none placeholder:text-gray-400 mt-5 bg-transparent" type="password" placeholder="Enter your Password" />
                    <button className="border-none bg-emerald-500 hover:bg-emerald-800 py-3 px-5 rounded-3xl text-xl font-bold text-white outline-none  mt-5 w-full">Login</button>
                </form>
            </div>
            
        </div>
    );
};
export default Login;