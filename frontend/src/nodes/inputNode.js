// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import React,{Suspense} from 'react';
import Basecomp from '../Components/Basecomp';


export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <Basecomp id={id} data={id} title="Input" value={currName}  selectType={inputType} onSelectType={(e)=>setInputType(e.target.value)} HandleType="source" handlePosition={Position.Right} handleId={`${id}-value`}/>
  );
}
