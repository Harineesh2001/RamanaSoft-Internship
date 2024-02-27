import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { integerRege, integerRege1, integerRege6 } from './Reg';


export default function Structure() {



  const navigate=useNavigate();

  const strucbutton=(e)=>
  {


      if(integerRege.test(values.Propertyvalue)&& integerRege.test(values.Carpetvalue)&&integerRege6.test(values.Pinvalue)){
      navigate("/stru",{ state: { values }})
    }
    else{
      alert("rrdg")
    }
  }

  const [values,setvalues]=useState({

    Propertyvalue:"",
    Carpetvalue:"",
    Pinvalue:"",
    Buildingvalue:"",
    Effectedvalue:"",
    Securityvalue:"",
    Individualvalue:""

    
  })

  const [validationErrors, setValidationErrors] = useState({
    Propertyvalue: "",
    Carpetvalue: "",
    Pinvalue: "",
    // Buildingvalue:"",
    Effectedvalue:"",
    Securityvalue:"",
    Individualvalue:""
    
  });
 
  const handle = (event) => {
    const { name, value } = event.target;
    setvalues({ ...values, [name]: value });

    if (name === "Propertyvalue") {
      if (!(integerRege1.test(value)) ){
        setValidationErrors({ ...validationErrors, [name]: "Please enter only integer values and greater than !lakh." });
      } else {
        setValidationErrors({ ...validationErrors, [name]: "" });
      }
    } else if (name === "Carpetvalue") {
      if (!integerRege.test(value)) {
        setValidationErrors({ ...validationErrors, [name]: "Please enter only integer values." });
      } else {
        setValidationErrors({ ...validationErrors, [name]: "" });
      }
    } else if (name === "Pinvalue") {
      if (!integerRege6.test(value)) {
        setValidationErrors({ ...validationErrors, [name]: "Please enter a 6-digit integer value." });
      } else {
        setValidationErrors({ ...validationErrors, [name]: "" });
      }}
    
    //  else if (name === "Buildingvalue") {
    //   if (value === "yes") {
    //     alert("")
    //   } else {
    //     setValidationErrors({ ...validationErrors, [name]: "" });
    //   }

    // }

    else if (name === "Effectedvalue"  || name ==="Individualvalue")  {
      if (value === "yes" || value === "yes") {
        window.alert("you can get insurance")
        setvalues({...values, value:""})
      }
    }


    // }
    // else if (name === "Securityvalue") {
    //   if (value === "1") {
    //     setValidationErrors({ ...validationErrors, [name]: "Please Select correct values." });
    //   } else {
    //     setValidationErrors({ ...validationErrors, [name]: "" });
    //   }

    // }
    // else if (name === "Individualvalue") {
    //   if (value === "1") {
    //     setValidationErrors({ ...validationErrors, [name]: "Please Select correct values." });
    //   } else {
    //     setValidationErrors({ ...validationErrors, [name]: "" });
    //   }

    // }
    

  };


  





  return (
   
    <div  className='container' >
      <form onSubmit={strucbutton}>
      <div className='container-fluid bg-info mt-5 text-center p-2'> <h3 className=''>Structure</h3> </div>
        {/* <div className=' container-fluid'> */}
          <div className=" mt-3  "></div><br></br>
          {/* <div className= "ms-5 me-5"> */}
          <table class="table  table-borderless border border-dark ">
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            {/* <th scope="col"></th> */}
          </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>
              </th>
              <td><label htmlFor='prov'>Current market value of property</label></td>
              <td><input type="text" id='prov' name="Propertyvalue" value={values.Propertyvalue} onChange={handle} placeholder='Min Rs100000' required></input>
              <br></br>
              {validationErrors.Propertyvalue && <span className="text-danger">{validationErrors.Propertyvalue}</span>}</td>

            </tr>
            <tr>
              <th scope='row'>
              </th>
              <td><label htmlFor='carpv'>Carpet Area/Sq.ft</label></td>
              <td><input type="text"  id="carpv"name="Carpetvalue" value={values.Carpetvalue} onChange={handle} required></input>
              <br></br>
              {validationErrors.Carpetvalue && <span className="text-danger">{validationErrors.Carpetvalue}</span>}
              </td>
              
              <td></td>
            </tr>
            
            <tr>
              <th scope='row'>
              </th>
              <td><label htmlFor='pinv'>Enter pincode</label></td>
              <td><input type="text" id="pinv" name="Pinvalue" value={values.Pinvalue} onChange={handle} maxLength={6} required></input>
              <br></br>
              {validationErrors.Pinvalue && <span className="text-danger">{validationErrors.Pinvalue}</span>}
              </td>

            </tr>
            <tr>
              <th scope='row'>
              </th>
              <td><label htmlFor='agev'>Age Of Building</label></td>
              <td> 
                <select  name="Buildingvalue"  id="agev"value={values.Buildingvalue}  onChange={handle}  required>
            <option value="">Select</option>
            <option value="0-5">0-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10-15">10-15 years</option>
            <option value="15-20">15-20 years</option>
            <option value="20-25">20-25 years</option>
            </select>
            <br></br>
            {validationErrors.Buildingvalue && <span className="text-danger">{validationErrors.Buildingvalue}</span>}
            </td>

            </tr>
            <tr>
              <th scope='row'>
              </th>
              <td><label htmlFor="effectv">Has Your Property Effected With (Floods/Earthquake)</label></td>
              <td>
              <select name='Effectedvalue' id='effectv' value={values.Effectedvalue}  onChange={handle} required >
            <option value="">Select</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
            </select>
            <br></br>
            {validationErrors.Effectedvalue && <span className="text-danger">{validationErrors.Effectedvalue}</span>}
             
             </td>

            </tr>
            {/* <tr>
              <th scope='row'>
              </th>
              <td className='bg-info text-danger'><label> Secrty measures</label></td>
            <td className='bg-info'></td>
            </tr>


            <tr>
              <th scope='row'>
              </th>
              <td ><label> 24*7 Securty</label></td>
            <td ><select >
            <option value="">Select</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
            </select> </td>
            </tr>


            <tr>
              <th scope='row'>
              </th>
              <td ><label> Are You salried individual</label></td>
            <td ><select >
            <option value="">Select</option>
            <option value="yes"></option>
            <option value="no">no</option>
            </select> </td>
            </tr> */}
            




          </tbody>




         </table>


            <div className='mt-4'></div>
         <div className='bg-info  text-center p-2'> Securty</div>
         <div className='mt-3'></div>

        
        <div className='ms-0'>

       
         <table class="table  table-borderless border border-dark ">
         
          <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            {/* <th scope="col"></th> */}
          </tr>
          </thead>
          <tbody>
          {/* <tr>
              <th scope='row'>
              </th>
              <td className='bg-info text-danger'><label> Secrty measures</label></td>
            <td className='bg-info'></td>
            </tr> */}




            <tr>
              <th scope='row'>
              </th>
              <td ><label htmlFor='secv'>24*7 Securty</label></td>
              <br></br>
            <td >
              <select  name="Securityvalue" id='secv' value={values.Securityvalue}  onChange={handle} required >
            <option value="">Select</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
            </select> 
            <br></br>
            {validationErrors.Securityvalue && <span className="text-danger">{validationErrors.Securityvalue}</span>}
            </td>
            </tr>


            <tr>
              <th scope='row'>
              </th>
            <td ><label htmlFor='salv'> Are You salried individual</label></td>
            <br></br>
            <td >
              <select  name="Individualvalue"  id="salv"value={values.Individualvalue}  onChange={handle} required >
            <option value="">Select</option>
            <option value="no">yes</option>
            <option value="yes">no</option>
            </select> 
            <br></br>
            {validationErrors.Individualvalue && <span className="text-danger">{validationErrors.Individualvalue}</span>}</td>
            </tr>


            </tbody>
            </table>
            </div>






         {/* </div> */}








          {/* <div>
          <label> Current Market Value Of Property</label>
          <input type="text"  ></input><br></br>
          </div>
          <div>
            <label>Carpet Area/Sq.ft</label>
            <input type="text"></input><br></br>
          </div> */}



          


      <button className=''  > procced</button>
      </form>
        </div>
    
       
    // </div>
    

   
  )
}

