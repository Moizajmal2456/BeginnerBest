import React, { useState, useEffect } from 'react';
import { Cssdata, Htmldata, Javadata, Javascriptdata, Nodedata, Reactdata } from "../../Data/Data";
import { Leftbar } from "../Leftbar/Leftbar";
import style from "./styles.module.scss";

export const Navbar = () => {
  const [selectedListData, setSelectedListData] = useState(Htmldata);

  const handleClick = (event) => {
    switch (event.target.innerText) {
      case "HTML":
        <Leftbar Listdata={"HTML"}/>;
        break;
      case "CSS":
        setSelectedListData(Cssdata);
        break;
      case "JAVASCRIPT":
        setSelectedListData(Javascriptdata);
        break;
      case "JAVA":
        setSelectedListData(Javadata);
        break;
      case "REACT JS":
        setSelectedListData(Reactdata);
        break;
      case "NODEJS":
        setSelectedListData(Nodedata);
        break;
      default:
        setSelectedListData(Htmldata);
    }
  };
  // // Ensure that the Leftbar is initially rendered with some default data
  // useEffect(() => {
  //   setSelectedListData(Htmldata);
  // }, []);

  return (
    <div className={style.Navbar_Wrapper}>
      <img src="/Images/beginnersbest1.png" alt="logo" />
      <div className={style.List_Item} onClick={handleClick}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>JAVA</li>
          <li>REACT JS</li>
          <li>NODEJS</li>
        </ul>
      </div>
      <div className={style.Button}>
        <button>SIGN IN</button>
        <button>SIGN UP</button>
      </div>
    </div>
  );
};
