// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import Textcomp from '../Components/Textcomp';


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');


  return (
    <Textcomp id={id} title="Text" heading="Text" value={currText}  type="source" handlePosition={Position.Right} handleId={`${id}-output`}/>
  );
}
