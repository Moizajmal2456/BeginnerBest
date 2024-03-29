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
      <h2>Text Elements</h2>
      <p>In HTML, text elements are used to define and display text content on a web page. These elements allow you to structure
         and format text, making it readable and visually appealing. Here is an overview of some important HTML text elements:</p>
      <h2>{"1. <p> - Paragraph"}</h2>
      <p>{"The <p> element is used to define paragraphs of text. It adds vertical spacing between blocks of text"}</p>
      <p>{"<p>This is a paragraph of text.</p>"}</p>
      <p>{"<p>This is another paragraph.</p>"}</p>

      <h2>{"2. <h1> to <h6> - Headings:"}</h2>
      <p>{"The <h1> to <h6> elements are used to define headings. <h1> is the largest and most important, while <h6> is the smallest."}</p>
      <p>{"<h1>Main Heading</h1>"}</p>
      <p>{"<h2>Subheading</h2>"}</p>

      <h2>{"3. <span> - Inline Container:"}</h2>
      <p>{"The <span> element is an inline container that can be used to apply styles or scripting to a specific part of the text."}</p>
      <p>{"<p>This is <span style=color: blue;>blue</span> text.</p>"}</p>

      <h2>{"4. <b> and <i> - Bold and Italic:"}</h2>
      <p>{"The <b> element is used to make text bold, and <i> is used to make text italic. However, these elements are less semantically meaningful than <strong> and <em>."}</p>
      <p>{"<p><b>Bold</b> text.</p>"}</p>
      <p>{"<p><i>Italic</i> text.</p>"}</p>

      <h2>{"5. <u> - Underline:"}</h2>
      <p>{"The <u> element is used to underline text. Similar to <b> and <i>, it's less common and less semantically meaningful than other alternatives."}</p>
      <p>{"<p><u>Underlined</u> text.</p>"}</p>

      <h2>{"6. <br> - Line Break:"}</h2>
      <p>{"The <br> element is used to insert a line break within text, moving the content that follows to a new line."}</p>
      <p>{"<p>This is a line of text.<br>Next line of text.</p>"}</p>

      <h2>{"7. <blockquote> - Block Quotation:"}</h2>
      <p>{"The <blockquote> element is used to define a block of text that is a quotation from another source."}</p>
      <p>{"<blockquote>"}</p>
      <p>{" <p>This is a quotation from another source.</p>"}</p>
      <p>{"</blockquote>"}</p>

      <h2>{"8. <strong> and <em> - Strong and Emphasis:"}</h2>
      <p>{"The <strong> element is used to give importance to text, indicating that it has strong importance. The <em> element is used to emphasize text."}</p>
      <p>{"<p><strong>Important</strong> information.</p>"}</p>
      <p>{"<p><em>Emphasized</em> text.</p>"}</p>

      <h2>Links and Navigation</h2>
      <p>HTML provides several elements for creating links and navigation within a web page. Here are some important HTML elements related to links and navigation:</p>
      <h2>{"1. <a> - Anchor Element (Link):"}</h2>
      <p>{"The <a>elements."}</p>
      <p>{"<a href=https://www.example.com>Visit Example.com</a>"}</p>
      <p>Additional Attributes:</p>
      <ul>
        <li>target="_blank": Opens the linked document in a new browser window or tab.</li>
        <li>download: Specifies that the target will be downloaded when the user clicks on the hyperlink.</li>
      </ul>
      <h2>{"2. <nav>- Navigate"}</h2>
      <p>{"The `<nav> he"}</p>
      <p>{"<nav>"}</p>
      <p>{"<ul>"}</p>
      <p>{"<li><a href=#home>Home</a></li>"}</p>
      <p>{"</p><li><a href=#about>About</a></li>"}</p>
      <p>{"</ul>"}</p>
      <p>{"</nav>"}</p>

      <h2>{"3. <img> - Image as a Link:"}</h2>
      <p>{"You can use the <img> element within an <a> element to create an image link."}</p>
      <p>{"<a href=https://www.example.com>"}</p>
      <p>{"<img src=example.jpg alt=Example Image>"}</p>
      <p>{"</a>"}</p>

      <h2>{"4. <iframe> - Inline Frame:"}</h2>
      <p>{"The <iframe> element allows you to embed another HTML document within the current document. It can be used for navigation within a frame."}</p>
      <p>{"<iframe src=navigation.html width=300 height=200></iframe>"}</p>

      <h2>Images</h2>
      <p>{"In HTML, the <img> (image) element is used to embed images in a web page. Here's a basic overview of how to use the <img> element:"}</p>
      <h2>Basic Tag</h2>
      <p>{"<img src=image.jpg alt=Description of the image>"}</p>
      <ul>
        <li>src: Specifies the URL or file path of the image.</li>
        <li>alt: Provides a text description of the image. This is important for accessibility and SEO.</li>
      </ul>

      <h2>Example with additional attributes</h2>
      <p>{"<img src=example.jpg alt=Example Image width=300 height=200>"}</p>
      <ul>
        <li>width and height: Specifies the width and height of the image. It's recommended to provide these attributes to ensure proper layout and prevent page reflow when the image loads.</li>
      </ul>

      <h2>Image as a link</h2>
      <p>{"You can use the <img> element within an <a> (anchor) element to make the image a clickable link:"}</p>
      <p>{"<a href=link-to-page.html>"}</p>
      <p>{"<img src=image.jpg alt=Image Link>"}</p>
      <p>{"</a>"}</p>

      <h2>Tables</h2>
      <p>{"In HTML, tables are used to display data in rows and columns. The primary tags for creating tables are <table>, <tr> (table row), <th> (table header), and <td> (table data). Here's an example of a simple HTML table:"}</p>
      <ul>
        <lis>{"The <table> tag defines the start of the table."}</lis>
        <li>{"The <thead> tag contains header rows within <tr> and <th> tags."}</li>
        <li>{"The <tbody> tag contains the main content rows within <tr> and <td> tags."}</li>
        <li>{"The border=1 attribute on the <table> tag adds a simple border around the table."}</li>
      </ul>
      <h2>colspan and rowspan Attributes:</h2>
      <p>The colspan attribute defines the number of columns a header cell should span, and rowspan defines the number of rows a cell should span.</p>
      <p>{"<tr>"}</p>
      <p>{"<th colspan=2>Employee Details</th>"}</p>
      <p>{"</tr>"}</p>
      <p>{"<tr>"}</p>
      <p>{"<td rowspan=2>1</td>"}</p>
      <p>{"<td>John Doe</td>"}</p>
      <p>{"</tr>"}</p>
      <p>{"<tr>"}</p>
      <p>{"<td>Developer</td>"}</p>
      <p>{"</tr>"}</p>

      <h2>Forms</h2>
      <p>HTML provides various form-related tags that allow you to create interactive forms on web pages. Here are some commonly used form tags:</p>
      <h2>{"1. <form> - Form Element:"}</h2>
      <p>{"<form action=/submit-form method=post>"}</p>
      <p> Form controls go here</p>
      <p>{"</form>"}</p>
      <ul>
        <li>action: Specifies the URL to which the form data should be sent.</li>
        <li>method: Specifies the HTTP method to be used for sending form data ("get" or "post").</li>
      </ul>
      <h2>{"2. <input> - Input Element:"}</h2>
      <p>{"The <input> element is used to create various types of form controls, such as text fields, checkboxes, radio buttons, etc."}</p>
      <p>{`<input type="text" name="username" id="username" placeholder="Enter your username" required>`}</p>
      <ul>
        <li>type: Specifies the type of input control.</li>
        <li>name: Specifies the name of the input control, used when submitting the form.</li>
        <li>id: Specifies a unique identifier for the input control.</li>
        <li>placeholder: Provides a short hint that describes the expected value of the input field.</li>
        <li>required: Specifies that the input must be filled out before submitting the form.</li>
      </ul>
      <h2>{"3. <label> - Label Element:"}</h2>
      <p>{`The <label> element is used to define a label for an <input>, <select>, <textarea>, etc. It improves accessibility and allows users to click the label to focus on the associated form control.`}</p>
      <p>{`<label for="username">Username:</label>`}</p>
      <p>{`<input type="text" name="username" id="username" required>`}</p>
      <ul>
        <li>for: Associates the label with a form control using the control's id.</li>
      </ul>
      <h2>{"4. <textarea> - Textarea Element:"}</h2>
      <p>{`The <textarea> element is used to create a multiline text input control.`}</p>
      <p>{`<label for="message">Message:</label>`}</p>
      <p>{`<textarea id="message" name="message" rows="4" required></textarea>`}</p>
      <ul>
        <li>rows: Specifies the number of visible text lines in the textarea.</li>
      </ul>
      <h2>{"5. <button> - Button Element:"}</h2>
      <p>{`The <button> element is used to create clickable buttons inside forms.`}</p>
      <p>{`<button type="submit">Submit</button>`}</p>
      <ul>
        <li>type: Specifies the type of button ("submit", "reset", or "button").</li>
      </ul>
      <h2>{`6. <input type="radio"> and <input type="checkbox"> - Radio and Checkbox:`}</h2>
      <p>{`These input types are used for radio buttons and checkboxes, respectively.`}</p>
      <p>{`<input type="radio" id="male" name="gender" value="male">`}</p>
      <p>{`<label for="male">Male</label>`}</p>
      <p>{`<input type="checkbox" id="subscribe" name="subscribe">`}</p>
      <p>{`<label for="subscribe">Subscribe to newsletter</label>`}</p>
      <ul>
        <li>name: Specifies the group to which the radio button or checkbox belongs.</li>
      </ul>
   </div>
 </div>
);
}