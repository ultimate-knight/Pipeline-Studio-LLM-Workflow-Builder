// BusinessNode.js

import { Position } from 'reactflow';
import Llmcomp from "../Components/Llmcomp"


export const BusinessNode = ({ id}) => {

  return (
    <Llmcomp  HandleType="target" title="Business" HandleSource="source" Positionleft={Position.Left} PositionRight={Position.Right}  handleSystem={`${id}-system`} handlePrompt={`${id}-prompt`} handleResponse={`${id}-response`}/>
  );
}
