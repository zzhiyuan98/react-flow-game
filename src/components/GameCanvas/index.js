import React, { useEffect } from "react";
import ReactFlow, { addEdge, useNodesState, useEdgesState, ReactFlowProvider } from "react-flow-renderer";
import { nodes as initialNodes, edges as initialEdges } from "./initial-elements";
import CustomEdge from "./CustomEdge";

import styles from "./index.module.scss";

const edgeTypes = {
  custom: CustomEdge,
};

const GameCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = params => setEdges(eds => addEdge(params, eds));

  const onEdgeDelete = id => {
    console.log("hi");
    onEdgesChange([{ id, type: "remove" }]);
  };

  const wrapEdges = edges => edges.map(e => {
    e.type = "custom";
    e.data = { ...e.data, onEdgeDelete };
    return e;
  });

  return <div className={styles.container}>
    <ReactFlowProvider>
      <ReactFlow
        fitView
        onInit={reactFlowInstance => console.log(reactFlowInstance)}
        nodes={nodes}
        edges={wrapEdges(edges)}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
      </ReactFlow>
    </ReactFlowProvider>
  </div>;
};

export default GameCanvas;
