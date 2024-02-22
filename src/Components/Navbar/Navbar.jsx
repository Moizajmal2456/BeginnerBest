import React, { useState, useEffect } from 'react';
import { Cssdata, Htmldata, Javadata, Javascriptdata, Nodedata, Reactdata } from "../../Data/Data";
import { Leftbar } from "../Leftbar/Leftbar";
import style from "./styles.module.scss";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [selectedListData, setSelectedListData] = useState();
  
  const handleClick = (event) => {
    switch (event.target.innerText) {
      case "HTML":
        setSelectedListData("Html");
        break;
      case "CSS":
        setSelectedListData("Css");
        break;
      case "JAVASCRIPT":
        setSelectedListData("Javascript");
        break;
      case "JAVA":
        setSelectedListData("Java");
        break;
      case "REACT JS":
        setSelectedListData("React");
        break;
      case "NODEJS":
        setSelectedListData("Node");
        break;
        default:
          setSelectedListData("Html");
        }
      };
      // Ensure that the Leftbar is initially rendered with some default data
      useEffect(() => {
        setSelectedListData(Htmldata);
      }, []);
      
      return (
    <div className={style.Navbar_Wrapper}>
      <img src="/Images/beginnersbest1.png" alt="logo" />
      <div className={style.List_Item}>
        <ul>
          <li><Link to="/selectedtopic/html">HTML</Link></li>
          <li><Link to="/selectedtopic/css">CSS</Link></li>
          <li><Link to="/selectedtopic/javascript">JAVASCRIPT</Link></li>
          <li><Link to="/selectedtopic/java">JAVA</Link></li>
          <li><Link to="/selectedtopic/react">REACT JS</Link></li>
          <li><Link to="/selectedtopic/node">NODEJS</Link></li>
        </ul>
      </div>
      <div className={style.Button}>
        <Link to="/signin">
         <button>SIGN IN</button>
        </Link>
        <Link to="/signup">
         <button>SIGN UP</button>
        </Link>
      </div>
    </div>
  );
};
