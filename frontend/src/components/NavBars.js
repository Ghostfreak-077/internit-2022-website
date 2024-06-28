import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBars = () => {

  const location = useLocation()
  // console.log(location);

  return (
    <div>
      <div className="upper-nav"></div>
      <link rel="stylesheet" href="/styles/Navbar.css" />
      
      <div className="main-nav">
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">INTER NIT SILCHAR, 2022</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-5 text-dark mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <Link class={`nav-link ${location.pathname === '/'?'nav-sel':''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${location.pathname === '/far'?'nav-sel':''}`} to="far">Fixtures & Results</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='https://drive.google.com/file/d/1k_m1hqrV27Bgb6UGqwZLuv3W6Y4sLmp7/view?usp=drivesdk' target='blank'>Rules & Guidelines</a>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${location.pathname === '/leaderboard'?'nav-sel':''}`} to="leaderboard">
            Leaderboard
          </Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${location.pathname === '/stats'?'nav-sel':''}`} to="stats">
            Stats
          </Link>
        </li>
        {/* <li className='nav-item'><Link className={`nav-link ${location.pathname === '/sponsors'?'nav-sel':''}`} to='sponsors'>Sponsors</Link></li>
        <li className='nav-item'><Link className={`nav-link ${location.pathname === '/team'?'nav-sel':''}`} to='team'>Team</Link></li> */}
        {/* <li className='nav-item'><Link className={`nav-link ${location.pathname === '/admin'?'nav-sel':''}`} to='admin'>Admin</Link></li> */}
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}

export default NavBars
