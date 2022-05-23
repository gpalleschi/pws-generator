import React, {useContext, useState} from 'react';
import { PWSContext } from '../contexts/PWSContext';
import * as Constants from './Constants';

export const CBChar = ({type}) => {

  const { pwsData, dispatch } = useContext(PWSContext);

  const [value, setValue] = useState(Constants.getBoolean(type, pwsData));

  const handleChange = (event) => {
    if ( value === true ) {
      setValue(false);
    } else {
      setValue(true);
    }
    dispatch(Constants.setBoolean(type, !value, pwsData));
  }

  return (
    <div className="form-check form-switch ">	  
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={value} onChange={handleChange} checked={value} />
        <label className="form-check-label pr-5">{type}</label>
    </div>
  )
}
