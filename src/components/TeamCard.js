import "./Team.css"
import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineFacebook } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';
const Teamcard = () => {
    return (
        <>
            <div className="card-container">
                <div className="card-title">
                    Designation
                </div>
                <div className="card-image">
                    <img src="./dummy.jpg" alt="pic" />
                </div>
                <div className="card-links">
                    <div className="card-btns">
                        <ul>Ankit Kumar  </ul>
                        <a href=""><AiFillLinkedin className="card-link-btn"size={30}/></a>
                        <a href=""><MdOutlineFacebook className="card-link-btn"size={30}/></a>
                        <a href=""><AiOutlineInstagram className="card-link-btn"size={30}/></a>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Teamcard;