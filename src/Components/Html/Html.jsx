import { Htmldata } from "../../Data/Data";
import style from "./styles.module.scss";

export const Html = () => {
return(
 <div className={style.HtmlWrapper}>
   <div className={style.Sidebar}>
     {Htmldata.map((obj) => (
       <ul>
         <li>{obj.name}</li>
       </ul>
      ))}
   </div>
   <div className={style.Detail}>

   </div>
 </div>
);
}