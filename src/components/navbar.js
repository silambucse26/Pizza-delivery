import React,{useState} from 'react'
import Logo from '../asserts/foodlogo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import'../styles/navbar.css';
function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
  return (
    <div className='navbar'>
        <div className='leftside' id={openLinks ? "open" : "close"}>
        <button>
              <ReorderIcon />
            </button>
        <img src={Logo} alt=''  />
        </div>
        <div className='rightside'>
            <Link to="/">HOME</Link>
            <Link to="/menu">MENU</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon />
            </button>
        </div>
    </div>
  );
}

export default Navbar;