// outputNode.js

import { useState } from 'react';
import {Position } from 'reactflow';
import React,{Suspense} from 'react';
import Basecomp from '../Components/Basecomp';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');


  console.log("id",id)
  return (
    <Basecomp id={id} data={data} title="Output" value={currName}  selectType={outputType} onSelectType={(e)=>setOutputType(e.target.value)} HandleType="target" handlePosition={Position.Left} handleId={`${id}-value`}/>
  );
}
