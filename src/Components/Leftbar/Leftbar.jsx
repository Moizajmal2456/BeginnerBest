import React, { useState } from 'react';
import style from "./styles.module.scss";
import { LeftbarData } from '../../Data/Data';
import { useParams } from 'react-router-dom';

export const Leftbar = () => {
  const leftBarData = [...LeftbarData];
  const { Topictype } = useParams();
  const filteredTopic = leftBarData.filter((data) => data.name === Topictype);
  {console.log(Topictype)};

  return (
    <div className={style.Leftbar}>
     {filteredTopic.map((obj) => (
      <ul>
        <li>{obj.value}</li>
      </ul>
     ))}
    </div>
  );
};
