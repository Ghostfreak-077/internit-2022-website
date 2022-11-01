import "./Team.css"
import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineFacebook } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';
const Teamcard = (props) => {
    return (
        <>
            <div className="card-container">
                <div className="card-title">
                    {props.designation}
                </div>
                <div className="card-image">
                    <img src="./dummy.jpg" alt="pic" />
                </div>
                <div className="card-btns">
                    <div className="card-name">
                        <ul>{props.name}</ul>
                    </div>
                    <div className="card-links">
                    <a href=""><AiFillLinkedin className="card-link-btn" size={30} />{props.linkedin}</a>
                    <a href=""><MdOutlineFacebook className="card-link-btn" size={30} />{props.fb}</a>
                    <a href=""><AiOutlineInstagram className="card-link-btn" size={30} />{props.ig}</a>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Teamcard;