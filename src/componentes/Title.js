import React from 'react'
const pjson = require('../../package.json');

export const Title = () => {
  return (
    <h1 className="mt-1 mb-3">{'Password Generator ' + pjson.version}</h1>	  
  )
}
