import { Switch } from "antd";
import React, { useState } from "react";
import { GameCanvas, StartModal } from "../components"
import {useStopwatch} from "react-timer-hook";

import styles from "./index.module.scss";

const App = () => {
  const [openStartModal, setOpenStartModal] = useState(true);
  const [watchVisible, setWatchVisible] = useState(true);

  const { seconds, minutes, hours, start, reset } = useStopwatch({ autoStart: true });

  const renderDigitalNumber = number => number < 10 ? `0${number}` : number;

  return <>
    <div className={styles.header}>
      <div className={styles.watchContainer}>
        {watchVisible && <div className={styles.stopwatch}>{`${renderDigitalNumber(hours)}:${renderDigitalNumber(minutes)}:${renderDigitalNumber(seconds)}`}</div>}
      </div>
      <div className={styles.switchContainer}>
        <Switch defaultChecked onChange={setWatchVisible} />
        <span>计时器</span>
      </div>
    </div>
    <GameCanvas />
    {openStartModal && <StartModal setOpenStartModal={setOpenStartModal} setWatchVisible={setWatchVisible} start={start} />}
  </>;
};

export default App;
