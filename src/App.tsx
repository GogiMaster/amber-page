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
          <Route path='/amber-page/' element={<Home/>}/>
          <Route path='/amber-page/contact' element={<Contact/>}/>
          <Route path='/amber-page/members' element={<Members/>}/>
          <Route path='/amber-page/news' element={<News/>}/>
          <Route path='/amber-page/more-about/:moreAboutId' element={<MoreAbout/>}/>


          <Route path='*' element={<>Nema tu ništ</>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App