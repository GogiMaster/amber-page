import './style/style.scss'
import Layout from './components/layout'
import Home from './featuers/home'
import Contact from './featuers/contact'
import { Route, Routes,
  // useLocation
   } from "react-router-dom";
import MoreAbout from './featuers/more-about';
import Members from './featuers/members';
import News from './featuers/NEWS/news';
import {AnimatePresence} from "framer-motion"
import Button from './components/button';

const App=()=> {
  //const location=useLocation()
 
  return (
    <>
    
   {/* <Layout />   Layout ovdje renderam zato sto se u Routes-u ponavlja animacija svaki put kada se ucita novi page*/ }
    <AnimatePresence mode={'wait'} >
      <Routes // location={location} key={location.key} vraca mi page na vrh svaki put kad se ucita s useLocation
      >
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
      </AnimatePresence>
      <Button type="scrollToTop"/>
    </>
  )
}

export default App