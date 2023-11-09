import PropTypes from 'prop-types';
import { useContext } from "react"
import { UserContext } from "../../Context/AuthContext"
import { Navigate } from "react-router-dom";


function PrivateRoute({children}) {


    const {user,loading} = useContext(UserContext);
    
    if (loading) {
        return <div 
        className="w-full h-screen flex justify-center items-center">
            loading ...</div>
    }

    if (user) {
        return children;
    }
    else{
        return <Navigate to={"/login"}> </Navigate>
    }
  

}

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute