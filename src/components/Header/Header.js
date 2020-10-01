import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
const Header = () => {
 
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  // console.log(loggedInUser)
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/orders">Order History</Link>
        {
          loggedInUser && <span style={{ color: "yellow" }}> {loggedInUser.name}</span>
        }
        <button onClick={()=>setLoggedInUser({})}>Sign Out</button>
      </nav>
    </div>
  );
};

export default Header;