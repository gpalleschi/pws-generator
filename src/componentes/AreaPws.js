import React,{useContext} from 'react';
import { PWSContext } from '../contexts/PWSContext';

export const AreaPws = () => {

  const { pwsData, dispatch } = useContext(PWSContext);

  return (
	  <div className="container mb-3">
	  <div className="row">

          <div className="col-12">
	  <input className="w-100 rounded-2" type="text" defaultValue={pwsData.password} id="passwordGenerated" placeholder="Your new password will appear here." readOnly />
	  </div>
	  </div>
	  </div>
 );
}
