import './style/style.scss'
import Layout from './components/layout'
import Home from './featuers/home'
import Contact from './featuers/contact'
import { Route, Routes } from "react-router-dom";
import MoreAbout from './featuers/more-about';
import Members from './featuers/members';
import News from './featuers/NEWS/news';

function App() {
 
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/members' element={<Members/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/more-about/:moreAboutId' element={<MoreAbout/>}/>


          <Route path='*' element={<>Nema tu ništ</>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App