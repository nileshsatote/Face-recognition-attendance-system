import React from 'react'
import '../home/home.css';
import NavLink from 'react-bootstrap/esm/NavLink';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
  return (
  <>

<div id='home_bk'>

    <div className='btn_cnt'>
  
    <div className='btn_div'>

    <NavLink href='/video'>
    <Button variant="contained">Video</Button>

    </NavLink>
    </div>

    <div className='btn_div'>
    <Button variant="contained">Uplode image</Button>
    </div>

    <div className='btn_div'>
    <Button variant="contained">Take Photos</Button>
    
    </div>

    </div>

    </div>
  </>
  )
}
