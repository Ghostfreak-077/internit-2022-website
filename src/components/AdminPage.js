import React from 'react'
import './AdminPage/Admin_Page.css'

const Admin = () => {
    const HandleClick = (e) =>{
        e.preventDefault();
    }

    return (
        <>
        <div className='Admin'>
            <div className='Writing_ m-4'>
                <p className='writing_'>ADMIN PANEL</p>
            </div>
            <select className='Drop_down mb-3'>
                    <option id='101' value="Badminton">Badminton</option>
                    <option id='102' value="Chess" required>Chess</option>
                    <option id='103' value="Table Tennis" required>Table Tennis</option>
            </select>  
            <form>
                <div className="form-group">
                    <p className='corresponding_ my-3'>Team 1 Name</p>
                    <input type="text" className="form-control my-3" id="201"></input>
                </div>
                <div className="form-group">
                    <p className='corresponding_ my-3'>Team 2 Name</p>
                    <input type="text" className="form-control my-3" id="202"></input>
                </div>
                <div className='HugMatch my-3'>
                    <p className='corresponding_ my-1'>Match Type</p>
                    <select className='Drop_down1 mx-4'>
                        <option className='select_drop' id='51' value="Men's Single">Men's Single</option>
                        <option className='select_drop' id='52' value="Men's Double" required>Men's Double</option>
                        <option className='select_drop' id='53' value="Women's Single" required>Women's Single</option>
                        <option className='select_drop' id='54' value="Women's Double" required>Women's Double</option>
                    </select>                    
                </div>
                <div className="form-group">
                    <p className='corresponding_ my-3'>Team 1 Score</p>
                    <input type="number" className="form-control my-3" id="203"></input>
                </div>
                <div className="form-group">
                    <p className='corresponding_ my-3'>Team 2 Score</p>
                    <input type="number" className="form-control my-3" id="204"></input>
                </div>
                <button type="submit" onClick={e=>HandleClick(e)} className="btn io btn-secondary my-5">Submit</button>
            </form>   
        </div>     
        </>
    )
}

export default Admin;
