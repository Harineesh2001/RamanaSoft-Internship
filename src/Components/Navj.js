import React from 'react'
import Nav from './Nav'
import Login from './Login'
import { useNavigate } from 'react-router-dom';

export default function Navj() {

    const navigate=useNavigate();
    const handle=(e)=>{
        
        navigate('/hh')

    }


  return (
    <>

    <div className='backg'>
   <Nav/>

    <div class="container px-4 ">
  <div class="row ">
    <div class="col 2">
    <div ><button className='border bg-primary rounded mt-3' onClick={handle} >Property Insurance</button> </div>
    </div>
    <div class="col 10">
     <Login/>
    </div>
  </div>
</div>
</div>
   

    </>
  )
}
