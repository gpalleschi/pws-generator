import React, {useContext, useState} from 'react';
import { CBChar } from './CBChar';
import { PWSContext } from '../contexts/PWSContext';
import * as Constants from './Constants';

export const ExcludeChar = () => {

  const { pwsData, dispatch } = useContext(PWSContext);

  const [value, setValue] = useState(pwsData.CharToExclude.join(''));

  const handleChange = (event) => {
    setValue(event.target.value);  
    pwsData.CharToExclude = event.target.value.split('');	  
    dispatch(pwsData);
  }

return (
    <div className="container">
        <div className="row mb-3 row justify-content-between">
            <div className="col-6">
                <CBChar type={Constants.CharToExclude}/>
            </div>
            <div className="col-6">
                <input className="w-100  rounded-2" type="text" id="excludeCharacters" value={value} onChange={handleChange}/>
                {/* <label className="form-check-label pr-5" for="flexSwitchCheckDefault">Chars to Exclude</label> */}
            </div>
        </div>
    </div>
  )	  
}
