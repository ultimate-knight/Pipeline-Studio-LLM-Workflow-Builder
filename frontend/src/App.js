
import React,{Suspense} from 'react';
const PipelineToolbar=React.lazy(()=>import('./toolbar').then(module => ({ default: module.PipelineToolbar })))
const PipelineUI=React.lazy(()=>import('./ui').then(module => ({ default: module.PipelineUI })))

function App() {
  return (
    <div>
      <Suspense fallback={<h3 style={{color:"black"}}>loading...</h3>}>
      <PipelineToolbar />
      </Suspense>
      <Suspense fallback={<h3 style={{color:"black"}}>loading...</h3>}>
      <PipelineUI />
      </Suspense>
    </div>
  );
}

export default App;
