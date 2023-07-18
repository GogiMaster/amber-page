import { useState } from "react"
import Header from "./header"
import SideBar from "./sidebar"
import Logo from "../featuers/logo"
import { Outlet } from "react-router"

const Layout = () => {
  const[sidebar,setSidebar]=useState<boolean>(false)
  const openSidebar=()=>{
    setSidebar(!sidebar)
  }

  return (
    <>
        <Logo/>
        <Header hamburgerToggle={sidebar} sidebarToggle={()=>openSidebar()} onClose={()=>setSidebar(false)}>
        <SideBar onClose={()=>setSidebar(false)} isOpen={sidebar}/>
        </Header>

        <Outlet/>
    </>
  )
}

export default Layout