// DataNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import Textcomp from "../Components/Textcomp"






export const DataNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');


  return (
    <Textcomp  id={id} title="Data" heading="Data" value={currText}  type="target" handlePosition={Position.Right} handleId={`${id}-output`}/>
  );
}
