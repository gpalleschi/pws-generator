import React, {useReducer} from 'react'
import { PwsBoard } from './componentes/PwsBoard';
import { PWSContext } from './contexts/PWSContext'
import { PWSReducer } from './contexts/PWSReducer'
import * as Constants from './componentes/Constants';

const init = () => {
  return JSON.parse(localStorage.getItem('pwsData')) || Constants.PWSDefault;
}

export const PWSApp = () => {

  const [pwsData, dispatch] = useReducer(PWSReducer, {}, init);

  // useEffect(() => {
  //   if ( !pwsData ) return;
    
  //   localStorage.setItem('pwsData',JSON.stringify(pwsData));
  // }, [pwsData]);

  return (
     <PWSContext.Provider value={{
       pwsData,
       dispatch
     }}>
	      <PwsBoard />
     </PWSContext.Provider>
  )
}
