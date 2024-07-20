import React from 'react';
import logo from "../assets/netflix_logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const user=useSelector((store)=>store.user)
  const navigate=useNavigate();
  const handleSignOut=()=>{

signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  navigate("/error")
});
  }
  return (
    <div className="absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
        <img className="w-36"src={logo} alt="Netflix_logo"/>

    {user &&(<div className='p-4 flex'> 
        <img alt="userIcon" src={user.photoURL} className='w-12 h-12' />
        <buttton className="bg-red-500 p-2 mx-2 cursor-pointer text-white" onClick={handleSignOut}>Signout</buttton>
    </div>)}
    </div>

    
    

  )
}

export default Header