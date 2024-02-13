// import { Cssdata, Htmldata, Javadata, Javascriptdata, Nodedata, Reactdata } from "../../Data/Data";
// import { Leftbar } from "../Leftbar/Leftbar";
// import style from "./styles.module.scss";

// export const Navbar = () => {

//  const handleClick = (event) => {
//   if (event.target.innerText === "HTML") {
//     return <Leftbar Listdata={Htmldata} />;
//   } else if (event.target.innerText === "CSS") {
//     return <Leftbar Listdata={Cssdata} />;
//   } else if (event.target.innerText === "JAVASCRIPT") {
//     return <Leftbar Listdata={Javascriptdata} />;
//   } else if (event.target.innerText === "JAVA") {
//     return <Leftbar Listdata={Javadata} />;
//   } else if (event.target.innerText === "REACT JS") {
//     return <Leftbar Listdata={Reactdata} />;
//   } else if (event.target.innerText === "NODEJS") {
//     return <Leftbar Listdata={Nodedata} />;
//   } else {
//     return <Leftbar Listdata={Htmldata} />;
//   }
// };

//   return (
//       <div className={style.Navbar_Wrapper}>
//          <img src="/Images/beginnersbest1.png" alt="logo"/>
//          <div className={style.List_Item} onClick={handleClick}>
//            <ul>
//              <li>HTML</li>
//              <li>CSS</li>
//              <li>JAVASCRIPT</li>
//              <li>JAVA</li>
//              <li>REACT JS</li>
//              <li>NODEJS</li>
//            </ul>
//          </div>
//          <div className={style.Button}>
//            <button>SIGN IN</button>
//            <button>SIGN UP</button>
//          </div>
//       </div>
//    );
// };


// import React, { useState } from 'react';
// import { Cssdata, Htmldata, Javadata, Javascriptdata, Nodedata, Reactdata } from "../../Data/Data";
// import { Leftbar } from "../Leftbar/Leftbar";
// import style from "./styles.module.scss";

// export const Navbar = () => {
//   const [selectedListData, setSelectedListData] = useState(Htmldata);

//   const handleClick = (event) => {
//     switch (event.target.innerText) {
//       case "HTML":
//         setSelectedListData(Htmldata);
//         break;
//       case "CSS":
//         setSelectedListData(Cssdata);
//         break;
//       case "JAVASCRIPT":
//         setSelectedListData(Javascriptdata);
//         break;
//       case "JAVA":
//         setSelectedListData(Javadata);
//         break;
//       case "REACT JS":
//         setSelectedListData(Reactdata);
//         break;
//       case "NODEJS":
//         setSelectedListData(Nodedata);
//         break;
//       default:
//         setSelectedListData(Htmldata);
//     }
//   };

//   return (
//     <div className={style.Navbar_Wrapper}>
//       <img src="/Images/beginnersbest1.png" alt="logo" />
//       <div className={style.List_Item} onClick={handleClick}>
//         <ul>
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JAVASCRIPT</li>
//           <li>JAVA</li>
//           <li>REACT JS</li>
//           <li>NODEJS</li>
//         </ul>
//       </div>
//       <div className={style.Button}>
//         <button>SIGN IN</button>
//         <button>SIGN UP</button>
//       </div>
//       {/* Conditionally render Leftbar based on selectedListData */}
//       {<Leftbar Listdata={selectedListData} />}
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';
import { Cssdata, Htmldata, Javadata, Javascriptdata, Nodedata, Reactdata } from "../../Data/Data";
import { Leftbar } from "../Leftbar/Leftbar";
import style from "./styles.module.scss";

export const Navbar = () => {
  const [selectedListData, setSelectedListData] = useState(Htmldata);

  const handleClick = (event) => {
    switch (event.target.innerText) {
      case "HTML":
        setSelectedListData(Htmldata);
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

  // Ensure that the Leftbar is initially rendered with some default data
  useEffect(() => {
    setSelectedListData(Htmldata);
  }, []);

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
      {/* Conditionally render Leftbar based on selectedListData */}
      <Leftbar Listdata={selectedListData} />
    </div>
  );
};
