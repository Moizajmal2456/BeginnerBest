import { Htmldata } from "../../Data/Data";
import { Leftbar } from "../Leftbar/Leftbar";
import style from "./styles.module.scss";

export const Html = () => {
  let structure = ["<!DOCTYPE html>","<html>","<head>","<title>Your Page Title</title>","</head>","<body>","<h1>Hello, World!</h1>","<p>This is a simple HTML page created with Notepad.</p>","</body>","</html>"]
return(
 <div className={style.HtmlWrapper}>
   <div className={style.Sidebar}>
     {/* {Htmldata.map((obj) => (
       <ul>
         <li>{obj.name}</li>
       </ul>
      ))} */}
      <Leftbar data={Htmldata}/>
   </div>
   <div className={style.Detail}>
     <h2>HTML</h2>
     <p>
       HTML (Hypertext Markup Language) is the standard markup language used to create and design documents on the World Wide Web.
       It forms the backbone of web content, providing a structure for organizing and presenting information on websites. HTML uses a system
       of tags to define various elements within a document, and these tags are interpreted by web browsers to render the content as intended.
     </p>
     <h2>Document Structure</h2>
     <p>
       Creating static websites as an HTML page using Notepad is a straightforward 
       process. Notepad is a basic text editor that allows you to write and save HTML code. 
       Here's a step-by-step procedure to create an HTML page using Notepad:
      </p>
      <ul>
        <li>Open Notepad: To open Notepad on a Windows computer, you can either search for "Notepad" in the Windows search bar or press Windows + R, type "notepad" and hit Enter.</li>
        <li>Start Writing HTML Code:</li>
        <li>You can create a simple HTML page by writing HTML code in the Notepad editor. A basic HTML document structure includes the following elements:</li>
      </ul>
     {structure.map((obj) => {
       return(
       <p>{obj}</p>
      )})}
      <ul>
        <li>You can customize this code by changing the title and the content inside the body element.</li>
        <li>Save the HTML File: </li>
        <li>To save your HTML file, follow these steps: </li>
        <li>Click on "File" in the Notepad menu.</li>
        <li>Select "Save As..."</li>
        <li>Choose the location where you want to save the file and give it a name with the ".html" extension. For example, you can name it "index.html."</li>
        <li>In the "Save as type" field, make sure to select "All Files" so that it saves as an HTML file, not a text file.</li>
        <li>Click the "Save" button.</li>
      </ul>
      <h2>View the HTML Page:</h2>
      <ul>
        <li>After saving your HTML file, you can view it in a web browser. To do this: Navigate to the location where you saved your HTML file.</li>
        <li>Right-click on the file and choose "Open with" and select your preferred web browser (e.g., Chrome, Firefox, or Edge).</li>
        <li>Your HTML page should open in the browser, displaying the content you defined in your HTML code.</li>
      </ul>
   </div>
 </div>
);
}