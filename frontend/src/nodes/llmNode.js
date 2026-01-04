// llmNode.js

import {Position } from 'reactflow';
import React,{Suspense} from 'react';
import Llmcomp from '../Components/Llmcomp';

export const LLMNode = ({ id}) => {

  return (
    <Llmcomp  HandleType="target" title="llm" HandleSource="source" Positionleft={Position.Left} PositionRight={Position.Right}  handleSystem={`${id}-system`} handlePrompt={`${id}-prompt`} handleResponse={`${id}-response`}/>
  );
}
