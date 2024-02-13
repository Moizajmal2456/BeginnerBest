// import style from "./styles.module.scss";

// export const Leftbar = ({Listdata}) => {
//  return (
//    <div className={style.Leftbar}>
//     {Listdata.map( (Listitem) => (
//       <ul>
//         <li>{Listitem}</li>
//       </ul>
//     ))}
//    </div>
//  );
// }

import style from "./styles.module.scss";

export const Leftbar = ({ Listdata }) => {
 return (
   <div className={style.Leftbar}>
    {Listdata.map((Listitem, index) => (
      <ul key={index}>
        <li>{Listitem}</li>
      </ul>
    ))}
   </div>
 );
}