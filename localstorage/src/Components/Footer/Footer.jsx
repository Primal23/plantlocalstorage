import React from 'react'
import footer_logo from '../../Assets/logoplant.jpg'
import instagram_icon from '../../Assets/instagram_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'
import '../Footer/Footer.css'
export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} style={{display:{xs:'none',md:'flex'},marginRight:'8px',height:'40px'}}/>
            <p>Green Oasis</p>
        </div>
      <ul className="footer-linnks">
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="fooer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon}/>
        </div>
        <div className="footer-icons-container">
        <img src={whatsapp_icon}/>
        </div>
    </div>
    <div className="footer-copyright">
    <hr/>
    <p>Copyright @ 2024 All Right Reserved.</p>
    </div>
    </div>
  )
}
