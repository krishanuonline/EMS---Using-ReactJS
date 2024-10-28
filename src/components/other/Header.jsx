const Header = () => {
    
    return (
        <div className="flex items-end justify-between bg-transparent">
            <h1 className="text-2xl font-medium">Hello! <br /> <span className="text-3xl font-semibold"> User 👋</span> </h1>
            <button className="bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-md">Logout</button>
        </div>

    );
};
export default Header;