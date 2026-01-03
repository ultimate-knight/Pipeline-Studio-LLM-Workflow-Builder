// DataNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import React,{Suspense} from 'react';
const Textcomp=React.lazy(()=>import('../Components/Textcomp').then(module => ({ default: module.Textcomp })))





export const DataNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');


  return (
    <Suspense fallback={<h3 className='text-black'>loading...</h3>}>
    <Textcomp  id={id} title="Data" heading="Data" value={currText}  type="target" handlePosition={Position.Right} handleId={`${id}-output`}/>
    </Suspense>
  );
}
