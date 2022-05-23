import React from 'react';
import { AreaPws } from './AreaPws';
import { CBChar } from './CBChar';
import { ExcludeChar } from './ExcludeChar';
import { LenPws } from './LenPws';
import { SpecChar } from './SpecChar';
import * as Constants from './Constants';
import { BottonExecute } from './BottonExecute';
import './PwsBoard.css';
import { Title } from './Title';

export const PwsBoard = () => {
  return (
    <div id="pwsBoard" className="d-flex flex-column vh-100 justify-content-center align-items-center">
    <form id="pwsForm" className="d-flex flex-column h-80 w-100 w-auto justify-content-center align-items-center rounded-2 shadow-lg">
    <div  className="m-3 d-flex flex-column h-80 w-100 w-auto justify-content-center align-items-center">
    <Title />
    <AreaPws />
    <LenPws />
    <div className="container">
        <div className="row mb-3 row justify-content-between">
            <div className="col-6">
                <CBChar type={Constants.UpperCase}/>
            </div>
            <div className="col-6">
                <CBChar type={Constants.LowerCase}/>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row mb-3 row justify-content-between">
            <div className="col-12">
                <CBChar type={Constants.Numbers}/>
            </div>
        </div>
    </div>
    <SpecChar />
    <ExcludeChar />
    <BottonExecute />
    </div>
    </form>	  
    </div>
  )
}
