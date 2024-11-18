import ReactDOM from "react-dom/client";
import App from './App.jsx'
import "./index.css"
import AuthProvider from './context/AuthProvider.jsx'



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AuthProvider><App /></AuthProvider>);