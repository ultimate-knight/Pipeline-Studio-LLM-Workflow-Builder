// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import React,{Suspense} from 'react';
const Textcomp=React.lazy(()=>import('../Components/Textcomp').then(module => ({ default: module.Textcomp })))


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');


  return (
    <Suspense fallback={<h3 className='text-black'>loading...</h3>}>
    <Textcomp id={id} title="Text" heading="Text" value={currText}  type="source" handlePosition={Position.Right} handleId={`${id}-output`}/>
    </Suspense>
  );
}
