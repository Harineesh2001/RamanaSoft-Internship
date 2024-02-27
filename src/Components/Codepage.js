import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function Codepage() {

    const { state } = useLocation();
  const details = state.values;
  const v=details.Propertyvalue
  const sec=details.Securityvalue
//   const Bulid =details.Buildingvalue
  

  const initialValue = sec==="yes" ? v * 0.001 : v * 0.002;

    const [codevalue,setcodevalue] =useState(initialValue);
    const [year,setyear]= useState("1");

        const handle=(operator)=>{


            if(operator==="1year")
            {
                setcodevalue(Math.floor(initialValue))
                setyear("1")


            }
            else if(operator==='2year'){
                setyear("2")
                setcodevalue(Math.floor(initialValue - ( 1 * (initialValue * 0.05))));
                
            }
            
            else if(operator==='3year'){
                setyear("3")
                setcodevalue(Math.floor(initialValue - (2 * (initialValue * 0.05))));
                
            }
            else if(operator==='4year'){
                setyear("4")
                setcodevalue(Math.floor(initialValue - (3 * (initialValue * 0.05))));
                
            }
            
            else if(operator==='5year'){
                setyear("5")
                setcodevalue(Math.floor(initialValue - (4 * (initialValue * 0.05))));
                
            }

            // else if(operator === '5year'){

            //     if(sec === "yes"){
            //        setcodevalue(Math.floor(initialValue*0.0008));
            //        setyear("5")

            //    }

            //    else{
            //    setcodevalue(Math.floor(initialValue*0.0016));
            //    setyear("5")
            //    }

            // }


           


        }
       
    

  return (
   <>
        <div>
            <div className='container  mt-5 '  >
                <div className='bg-info text-center p-2'>insurancename</div>
                <h1 className='text-center'>your premium  ammount  for {year}</h1><br>
                </br>
                <div className='text-center'>
                    <div className=' border rounded border-dark w-25 h-25 ms-5 p-2 '>
                         <h3 className='text-center'>{codevalue}</h3>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col 4 mt-3'>
                <div className=" rounded-pill bg-success p-2 text-white text-center p-1 w-50 h-75 mt-3 " onClick={()=>handle('1year')} ><h4>1 Year</h4></div>
                </div>
                <div className='col 4 mt-3'>
                    <div className=" rounded-pill bg-success p-2 text-white text-center p-1 w-50 h-75 mt-3" onClick={()=>handle('2year')}> <h4>2years</h4></div>
                </div>


                <div className='col 4 mt-3'>
                    <div className=" rounded-pill bg-success p-2 text-white text-center p-1 w-50 h-75 mt-3" onClick={()=>handle('3year')}> <h4>3years</h4></div>
                </div>

                <div className='col 4 mt-3'>
                    <div className=" rounded-pill bg-success p-2 text-white text-center p-1 w-50 h-75 mt-3" onClick={()=>handle('4year')}> <h4>4years</h4></div>
                </div>

                <div className='col 4 mt-3'>
                    <div className=" rounded-pill bg-success p-2 text-white text-center p-1 w-50 h-75 mt-3" onClick={()=>handle('5year')}> <h4>5years</h4></div>
                </div>

                   </div>
               



            </div>
        </div>
   </>
  )
}
