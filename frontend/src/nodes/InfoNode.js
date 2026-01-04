// llmNode.js

import { Handle, Position } from 'reactflow';
import Llmcomp from '../Components/Llmcomp';

export const InfoNode = ({ id, data }) => {

  return (
    <Llmcomp  HandleType="target" title="Information" HandleSource="source" Positionleft={Position.Left} PositionRight={Position.Right}  handleSystem={`${id}-system`} handlePrompt={`${id}-prompt`} handleResponse={`${id}-response`}/>
  );
}
