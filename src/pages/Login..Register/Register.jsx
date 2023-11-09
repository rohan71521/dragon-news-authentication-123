// import PropTypes from 'prop-types'; 
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import NavBar from "../../sharedCompo/NavBar";
import { UserContext } from '../../Context/AuthContext';



function Register() {
    const [seenPassword, setSeenPassword] = useState(true);
    const [ success, setSuccess] = useState('');
    const [ errorMsg, setErrorMsg] = useState('')

    const {registration, user} = useContext(UserContext);




    const handleRegister = (e) =>{
        e.preventDefault(); 
        setSuccess('')
        setErrorMsg('')
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        registration(email,password)
        .then(()=>{
            setSuccess('registration successfull')
            e.target.email.value = "";
            e.target.password.value = "";
            e.target.name.value = "";
        })
        .catch(error => {
            setErrorMsg(error.message)
        })
    }
    

    if (user) {
        return <Navigate to={"/"}></Navigate>
    }

    return(
<div>    
    <NavBar>    </NavBar>    
     <div className="h-screen flex justify-center items-center">
    <div className="bg-gray-200 p-5 md:w-1/3 w-full rounded-md shadow-lg">
    <form onSubmit={handleRegister}>
    
    <div>
    <label className="block mb-3" htmlFor="name">Name</label>
    <input className="w-full p-2 mb-3 rounded-md "
    type="text" name="name" id="name" placeholder="Name"/> 
    </div>

    
    
    <div>
    <label className="block mb-3"  htmlFor="email">Email</label>
    <input className="w-full p-2 mb-3 rounded-md "
    type="email" name="email" id="email" placeholder="Email"/> 
    </div>

    
    <div className="relative">
    <label className="block mb-3"  htmlFor="password">Password</label>
    <input className="w-full p-2 rounded-md "
    type={seenPassword ? "password" : "text"}
    name="password" id="password"
    placeholder="Password"/> 
    <span onClick={()=>setSeenPassword(!seenPassword)}
    className="bg-gray-300 px-2 py-1 rounded-md
      cursor-pointer absolute top-2/4 mt-0.5  right-1">
       { seenPassword ? 'See' : 'Hide'}
    </span>
    </div>




    <button 
    className="w-full p-3 bg-green-600 text-white font-bold rounded-md mt-10"
     type="submit">Register</button>

    </form>
    <p className="text-red-600">{errorMsg}</p>
    <p className="text-green-600">{success}</p>
    <p className="pt-5">Have An Account ? <Link className="underline text-blue-600 " to={"/login"}>Please Login</Link></p>
    </div>
    </div>
</div>
    )
}

// Register.propTypes = {
//     registration:PropTypes.func 
// }

export default Register;