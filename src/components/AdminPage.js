import React from 'react'
import './AdminPage/Admin_Page.css'

const Admin = () => {
    return (
        <>
        <div className='Admin'>
            <div className='Writing_ m-4'>
                <p className='writing_'>ADMIN PANEL</p>
            </div>
            <select className='Drop_down mb-4'>
                    <option id='1' value="Badminton">Badminton</option>
                    <option id='2' value="Chess" required>Chess</option>
                    <option id='3' value="Table Tennis" required>Table Tennis</option>
            </select>  
            {/* <div class="dropdown mb-4">
                <button onClick="DropClick" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Game
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button">Badminton</button>
                    <button class="dropdown-item" type="button">Chess</button>
                    <button class="dropdown-item" type="button">Table Tennis</button>
                </div>
            </div> */}
            <form>
                <div className="form-group mx-5">
                    <p className='corresponding_ my-3'>Team 1 Name</p>
                    <input type="name" className="form-control my-3" id="exampleInputEmail1"></input>
                </div>
                <div className="form-group mx-5">
                    <p className='corresponding_ my-3'>Team 2 Name</p>
                    <input type="name" className="form-control my-3" id="exampleInputPassword1"></input>
                </div>
                <div className='HugMatch my-3'>
                    <p className='corresponding_ my-1'>Match Type</p>
                    <select className='Drop_down mx-4'>
                        <option value="Badminton">Badminton</option>
                        <option value="Chess" required>Chess</option>
                        <option value="Table Tennis" required>Table Tennis</option>
                    </select>                    
                </div>
                <div className="form-group mx-5">
                    <p className='corresponding_ my-3'>Team 1 Score</p>
                    <input type="name" className="form-control my-3" id="exampleInputEmail1"></input>
                </div>
                <div className="form-group mx-5">
                    <p className='corresponding_ my-3'>Team 2 Score</p>
                    <input type="name" className="form-control my-3" id="exampleInputEmail1"></input>
                </div>
                <button type="submit" className="btn io btn-secondary my-5">Submit</button>
            </form>   
        </div>     
        </>
    )
}

export default Admin;