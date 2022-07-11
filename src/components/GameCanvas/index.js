import React from "react";
import ReactFlow, { addEdge, Controls, useNodesState, useEdgesState } from "react-flow-renderer";

import styles from "./index.module.scss";

const GameCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = params => setEdges(eds => addEdge(params, eds));

  return <ReactFlow
    nodes={nodes}
    edges={edges}
    onNodesChange={onNodesChange}
    onEdgesChange={onEdgesChange}
    onConnect={onConnect}
  >
    <Controls />
  </ReactFlow>;
};

export default GameCanvas;
