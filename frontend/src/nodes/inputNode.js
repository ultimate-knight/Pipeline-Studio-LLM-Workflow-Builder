// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import React,{Suspense} from 'react';
const Basecomp=React.lazy(()=>import('../Components/Basecomp').then(module => ({ default: module.Basecomp })))

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <Suspense Suspense={<h3 className='text-black'>loading...</h3>}>
    <Basecomp id={id} data={id} title="Input" value={currName}  selectType={inputType} onSelectType={(e)=>setInputType(e.target.value)} HandleType="source" handlePosition={Position.Right} handleId={`${id}-value`}/>
    </Suspense>
  );
}
