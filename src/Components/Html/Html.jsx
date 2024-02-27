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
    <h2>HTML</h2>
    <p>
      HTML (Hypertext Markup Language) is the standard markup language used to create and design documents on the World Wide Web.
      It forms the backbone of web content, providing a structure for organizing and presenting information on websites. HTML uses a system
      of tags to define various elements within a document, and these tags are interpreted by web browsers to render the content as intended.
    </p>
    <h2>Document Structure</h2>
    <p></p>
   </div>
 </div>
);
}