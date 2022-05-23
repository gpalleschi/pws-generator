import React, {useContext, useState} from 'react';
import { PWSContext } from '../contexts/PWSContext' 

export const LenPws = () => {

  const { pwsData, dispatch } = useContext(PWSContext);

  const [value, setValue] = useState(pwsData.lenPWS);

  const handleChange = (event) => {
    // console.log(event.target.value);
    pwsData.lenPWS = event.target.value;
    setValue(pwsData.lenPWS);
    dispatch(pwsData); 
  }

  return (
    <div className="container mb-2">
       <div className="row justify-content-between">
          <div className="col-4">
              <label className="form-label">Length : {value}</label>	  
          </div>
          <div className="col-8">
              <input type="range" className="form-range" min="1" max="128" value={value} id="customRange1" onChange={handleChange}></input>
          </div>
       </div>
    </div>    
  )
}
