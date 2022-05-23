import React, {useContext} from 'react'
import * as Functions from './Functions';
import { PWSContext } from '../contexts/PWSContext' 

export const BottonExecute = () => {

  const { pwsData, dispatch } = useContext(PWSContext);

  const genPws = () => {
	  console.log('Call generatePassword');
    	  const passwordGenerated = Functions.generatePassword(pwsData)
	  pwsData.password = passwordGenerated;
	  dispatch(pwsData);
	  console.log(passwordGenerated);
  }

  return (
    <button className="btn btn-primary btn-lg shadow-lg" onClick={genPws}>Generate</button>	  
  )
}
