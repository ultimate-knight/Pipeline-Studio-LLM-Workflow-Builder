// BusinessNode.js

import { Position } from 'reactflow';
import React,{Suspense} from 'react';
const Llmcomp=React.lazy(()=>import('../Components/Llmcomp').then(module => ({ default: module.Llmcomp })))

export const BusinessNode = ({ id}) => {

  return (
    <Suspense fallback={<h3 className='text-black'>loading...</h3>}>
    <Llmcomp  HandleType="target" title="Business" HandleSource="source" Positionleft={Position.Left} PositionRight={Position.Right}  handleSystem={`${id}-system`} handlePrompt={`${id}-prompt`} handleResponse={`${id}-response`}/>
    </Suspense>
  );
}
