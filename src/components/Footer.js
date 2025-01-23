import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href="https://www.instagram.com/silambu__001_/" target="_blank" rel="noopener noreferrer">
  <InstagramIcon style={{ color: "white", fontSize: "75px" }} />
</a>
<a href="https://www.linkedin.com/in/Silambarasan Selvam/" target="_blank" rel="noopener noreferrer">
  <LinkedInIcon style={{ color: "white", fontSize: "75px" }} />
</a>
<a href="https://www.facebook.com/Silambarasan" target="_blank" rel="noopener noreferrer">
  <FacebookIcon style={{ color: "white", fontSize: "75px" }} />
    </a>


          <TwitterIcon />
        </div>
        <p>&copy; 2024 pizzatasty.com</p>
    </div>
  )
}

export default Footer