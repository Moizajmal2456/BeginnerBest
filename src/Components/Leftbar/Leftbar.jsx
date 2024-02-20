import React, { useState } from 'react';
import style from "./styles.module.scss";
import { Htmldata } from '../../Data/Data';

export const Leftbar = ({ Listdata }) => {
  const [listData, setListData] = useState();

  return (
    <div className={style.Leftbar}>
     {Htmldata.map((obj) => (
      <ul>
        <li>{obj.name}</li>
      </ul>
     ))}
    </div>
  );
};
