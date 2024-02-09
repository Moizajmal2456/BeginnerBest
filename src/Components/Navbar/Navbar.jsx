import style from "./styles.module.scss";

export const Navbar = () => {
  return (
      <div className={style.Navbar_Wrapper}>
         <img src="/Images/beginnersbest1.png" alt="logo"/>
         <div className={style.List_Item}>
           <ul>
             <li>HTML</li>
             <li>CSS</li>
             <li>JAVASCRIPT</li>
             <li>REACT JS</li>
             <li>NODE JS</li>
             <li>HTML</li>
           </ul>
         </div>
         <div className={style.Button}>
           <button>SIGN IN</button>
           <button>SIGN UP</button>
         </div>
      </div>
   );
};
