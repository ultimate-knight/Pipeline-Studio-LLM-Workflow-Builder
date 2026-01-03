// GroupNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import React,{Suspense} from 'react';
const Basecomp=React.lazy(()=>import('../Components/Basecomp').then(module => ({ default: module.Basecomp })))

export const GroupNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.GroupName || id.replace('customGroup-', 'group_'));
  const [groupType, setgroupType] = useState(data.groupType || 'Text');


  return (
    <Suspense fallback={<h3 className='text-black'>loading...</h3>}>
    <Basecomp id={id} title="Group" value={currName}  selectType={groupType} onSelectType={(e)=>setgroupType(e.target.value)} HandleType="Response" handlePosition={Position.Left} handleId={`${id}-value`}/>
    </Suspense>
  );
}
