import React, { useState } from 'react';
import { explorer } from './data/folderData';
import Folder from './components/Folder';
import useTraverseTree from './hooks/use-traverse-tree';

function App() {
  const [explorerData, setExploredData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
      const finalTree = insertNode(explorerData ,folderId, item, isFolder);
      setExploredData(finalTree);
  }
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
    </div>
  );
}

export default App;
