import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { SigninPage } from './Pages/SignIn';
import { SignupPage } from './Pages/Signup';
import { SelectedTopicPage } from './Pages/SelectedTopic';
import { HtmlPage } from './Pages/Html';
function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path='/selectedtopic/:Topictype' element={<SelectedTopicPage/>}/>
         <Route path='/Html' element={<HtmlPage/>}/>
         <Route path='/signin' element={<SigninPage/>}/>
         <Route path='/signup' element={<SignupPage/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
