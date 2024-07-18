import React from 'react';
import logo from "../assets/netflix_logo.png"

const Header = () => {
  return (
    <div className="absolute px-2 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-36"src={logo} alt="Netflix_logo"/>
    </div>

  )
}

export default Header