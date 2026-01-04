// GroupNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import Basecomp from '../Components/Basecomp';


export const GroupNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.GroupName || id.replace('customGroup-', 'group_'));
  const [groupType, setgroupType] = useState(data.groupType || 'Text');


  return (
    <Basecomp id={id} title="Group" value={currName}  selectType={groupType} onSelectType={(e)=>setgroupType(e.target.value)} HandleType="Response" handlePosition={Position.Left} handleId={`${id}-value`}/>
  );
}
