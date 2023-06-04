import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Node from './components/Node';
import { findPath } from './functions/findPath';
import { generateTree } from './functions/generateTree';
import { getLevelWiseNodes } from './functions/getLevelWiseNodes';

function App() {
  const [input, setInput] = useState("");
  const [root, setRoot] = useState(null);
  const [activeMap, setActiveMap] = useState({});

  const createTree = () => {
    setRoot(generateTree(input.split(",")));
  };

  const handleClick = (node) => {
    const data = findPath(root,node.key);
    if(data.length > 0){
      setActiveMap(data.reduce((acc,value) => (
        {...acc,[value]: true}
      ), {}))
    } else {
      setActiveMap({});
    }
  }

  const renderTree = (rootNode) => {
    const nodes = getLevelWiseNodes(rootNode);
    if(nodes){
      const levels = Object.keys(nodes);
      return levels.map((level) => (
        <div className='row'>
          {nodes[level].map((node, i) => (
            <Node key={node.key+level} value={node.value} isActive={node.key in activeMap} handleClick={() => handleClick(node)} />
          ))}
        </div>
      ))
    }
    return null;
  }
  

  return (
    <div className="App">
      <Input value={input} onChange={(e) => setInput(e.target.value)}  />
      <button onClick={createTree}>Submit</button>

      <div className='tree'>
        {renderTree(root)}
      </div>
    </div>
  );
}

export default App;
