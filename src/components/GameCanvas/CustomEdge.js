import { CloseCircleOutlined } from "@ant-design/icons";
import React from 'react';
import { getBezierPath, getEdgeCenter } from 'react-flow-renderer';

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, markerEnd }) => {
  const { onEdgeDelete } = data;

  const edgePath = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({ sourceX, sourceY, targetX, targetY });

  const iconSize = 20;

  const pathStyle = {
    fill: "transparent",
    stroke: "#256eff",
    strokeWidth: 2,
  };

  return (
    <>
      <path
        id={id}
        style={pathStyle}
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject width={iconSize} height={iconSize} x={edgeCenterX - iconSize / 2} y={edgeCenterY - iconSize / 2}>
        <CloseCircleOutlined style={{ fontSize: `${iconSize}px` }} onClick={() => onEdgeDelete(id)} />
      </foreignObject>
    </>
  );
};

export default CustomEdge;
