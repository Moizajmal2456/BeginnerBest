import React, { useState, useEffect } from 'react';
import style from "./styles.module.scss";

export const Leftbar = ({ Listdata: initialListData }) => {
  const [listData, setListData] = useState(initialListData || []);

  useEffect(() => {
    // Use initialListData if provided, otherwise set a default value
    setListData(initialListData || []);
  }, [initialListData]);

  return (
    <div className={style.Leftbar}>
      <ul>
        {listData.map((listItem, index) => (
          <li key={index}>{listItem.name}</li>
        ))}
      </ul>
    </div>
  );
};
