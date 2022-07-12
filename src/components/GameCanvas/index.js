import { Button } from "antd";
import React, { useEffect, useState } from "react";
import ReactFlow, { addEdge, useNodesState, useEdgesState, ReactFlowProvider } from "react-flow-renderer";
import { initialNodes, descriptions, solutions, problemLength } from "../../problems/initial-nodes";
import CustomEdge from "./CustomEdge";

import styles from "./index.module.scss";

const edgeTypes = {
  custom: CustomEdge,
};

const GameCanvas = ({ score, setScore, pause }) => {
  const [problemId, setProblemId] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);
  const [solution, setSolution] = useState(solutions[0]);
  const [disabled, setDisabled] = useState(false);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes[0]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = params => setEdges(eds => addEdge(params, eds));

  const onEdgeDelete = id => onEdgesChange([{ id, type: "remove" }]);

  const wrapEdges = edges => edges.map(e => {
    e.type = "custom";
    e.data = { ...e.data, onEdgeDelete };
    return e;
  });

  const getCorrectAnswers = () => {
    let count = 0;
    edges.map(e => {
      const sourceId = e.source;
      const targetId = e.target;
      const qIndex = sourceId.charAt(sourceId.length - 1);
      const aIndex = targetId.charAt(targetId.length - 1);
      if (solution[qIndex] === aIndex) count++;
      return e;
    });
    return count;
  };

  const updateScore = prevScore => setScore(prevScore + getCorrectAnswers() * 5);

  const onNext = () => {
    updateScore(score);
    if (problemId === problemLength - 1) {
      pause();
      return setDisabled(true);
    }
    const nextProblemId = problemId + 1;
    setDescription(descriptions[nextProblemId]);
    setSolution(solutions[nextProblemId]);
    setNodes(initialNodes[nextProblemId]);
    setEdges([]);
    setProblemId(nextProblemId);
  };

  return <div className={styles.container}>
    <div className={styles.questionContainer}>
      <span>{description}</span>
      <Button disabled={disabled} type="primary" shape="round" style={{ width: "100px" }} onClick={onNext}>{problemId === problemLength - 1 ? "完成答题" : "下一题"}</Button>
    </div>
    <ReactFlowProvider>
      <ReactFlow
        fitView
        maxZoom={1.5}
        nodes={nodes}
        edges={wrapEdges(edges)}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineStyle={{ stroke: "#91C788", strokeWidth: "2" }}
      >
      </ReactFlow>
    </ReactFlowProvider>
  </div>;
};

export default GameCanvas;
