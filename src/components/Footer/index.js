import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'
import './index.css'

function Footer() {
  return (
    <div className="footer">
      <div className="icons-con">
        <AiOutlineGoogle className="icon" />
        <AiOutlineTwitter className="icon" />
        <AiOutlineYoutube className="icon" />
        <AiOutlineLinkedin className="icon" />
        <AiOutlineInstagram className="icon" />
      </div>
      <p className="contacts-us">Contact us</p>
    </div>
  )
}

export default Footer
