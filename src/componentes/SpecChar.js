import React, {useContext, useState} from 'react';
import { PWSContext } from '../contexts/PWSContext';
import { CBChar } from './CBChar';
import * as Constants from './Constants';

export const SpecChar = () => {

  const { pwsData, dispatch } = useContext(PWSContext);

  const [value, setValue] = useState(pwsData.SpecialChars.join(''));

  const handleChange = (event) => {
    setValue(event.target.value);  
    pwsData.SpecialChars = event.target.value.split('');	  
    dispatch(pwsData);
  }
	
  return (
	  <div className="container">
            <div className="row mb-3 row justify-content-between">
            <div className="col-6">
                <CBChar type={Constants.SpecialChars}/>
            </div>
            <div className="col-6">
                <input className="w-100  rounded-2" type="text" value={value} id="excludeCharacters" onChange={handleChange}/>
                {/* <label className="form-check-label pr-5" for="flexSwitchCheckDefault">Chars to Exclude</label> */}
            </div>
        </div>
    </div>
  )
}
