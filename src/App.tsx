import './style/style.scss'
import Layout from './components/layout'
import Home from './featuers/home'
import Contact from './featuers/contact'
import { Route, Routes } from "react-router-dom";
import MoreAbout from './featuers/more-about';

function App() {
 
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/amber-page/' element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/more-about/:moreAboutId' element={<MoreAbout/>}/>
          <Route path='*' element={<>Nema tu nis</>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App