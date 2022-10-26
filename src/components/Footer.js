import "./Footer.css"
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdOutlineFacebook } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BsFillTelephoneFill} from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';



const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="footer-left">
                    <div className="footer-address">
                        <h2>Address</h2>
                        <ul><a href="mailto:internit@gmail.com"><SiGmail size={20} className="footer-loc-btn"/>internit@gmail.com</a></ul>
                        <ul><a href="tel:+9147769573497"><BsFillTelephoneFill size={20} className="footer-loc-btn"/>+9147769573497</a></ul>
                        <ul><MdLocationOn  size={25} className="footer-loc-btn"/>NIT Silchar, Assam</ul>
                    </div>
                    <div className="footer-links">
                        <h2>Follow us on</h2>
                        <div className="footer-btns" >
                        <div className="footer-btn-respon">

                        <a href="/"><button className="footer-link-btn"><AiFillLinkedin size={25} className="icon-btn-1"/></button></a>
                        <a href="/"><button className="footer-link-btn"><AiFillTwitterCircle size={25} className="icon-btn-2"/></button></a>
                        <a href="/"><button className="footer-link-btn"><MdOutlineFacebook size={25} className="icon-btn-3"/></button></a>
                        <a href="/"><button className="footer-link-btn"><AiOutlineInstagram size={25} className="icon-btn-4"/></button></a>
                        </div>
                        </div>
                    </div>

                </div>
                <div className="footer-right">
                    <h2>Map</h2>
                    <section><iframe title="mymap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1030424793535!2d92.79115564073894!3d24.757655927802585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20Of%20Technology%2C%20Silchar!5e0!3m2!1sen!2sin!4v1666801726860!5m2!1sen!2sin" width="350" height="250" center ="24.757802068498105, 92.79240018573046" style={{ border:0 }}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></section>

                </div>

            </div>

        </>
    );
}

export default Footer;