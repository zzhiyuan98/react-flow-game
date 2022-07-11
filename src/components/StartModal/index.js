import { Modal, Button, Switch } from "antd";
import React from "react";

import styles from "./index.module.scss";

const StartModal = ({ setOpenStartModal, setWatchVisible, start }) => {
  const onStart = () => {
    setOpenStartModal(false);
    start();
  };

  return <Modal
    visible
    closable={false}
    style={{ top: 0, bottom: 0, minWidth: "calc(100vw)", margin: 0, padding: 0 }}
    bodyStyle={{ height: "calc(100vh)", background: "#EEEEEE" }}
    footer={null}
  >
    <div className={styles.container}>
      <span className={styles.title}>北极知识竞赛</span>
      <div className={styles.footer}>
        <div className={styles.switchContainer}>
          <Switch defaultChecked onChange={setWatchVisible} />
          <span>计时器</span>
        </div>
        <Button type="primary" shape="round" onClick={onStart}>开始答题</Button>
      </div>
    </div>
  </Modal>;
};

export default StartModal;
