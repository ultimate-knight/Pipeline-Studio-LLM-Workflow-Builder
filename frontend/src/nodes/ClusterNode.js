// ClusterNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import Basecomp from '../Components/Basecomp';


export const ClusterNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.clusterName || id.replace('customCluster-', 'cluster_'));
  const [clusterType, setclusterType] = useState(data.clusterType || 'Text');


  return (
    <Basecomp id={id} title="Cluster" value={currName}  selectType={clusterType} onSelectType={(e)=>setclusterType(e.target.value)} HandleType="target" handlePosition={Position.Left} handleId={`${id}-value`}/>
  );
}
