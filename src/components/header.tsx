import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./hambuerger";
import {motion} from "framer-motion"


export type LinkType = {
  path: string;
  label: string;
};
const headerLinks:LinkType[]=[
    {
        path:"/amber-page/",
        label:"Home"
    },
    {
        path:"/amber-page/contact",
        label:"Kontakt"
    },
    {
        path:"/amber-page/news",
        label:"News"
    },
]

type HeaderProps={
  sidebarToggle:()=>void;
  onClose:()=>void
  children:ReactNode;
}
const Header = ({sidebarToggle,onClose,children}:HeaderProps) => {
  return (
    <motion.header className="header"
    initial={{y:-200,zIndex:-1,opacity:0}}
    animate={{y:0,opacity:1,zIndex:1}}
   transition={{delay:1,duration:.5}}
    >{children}
    <Hamburger toggle={sidebarToggle}/>
        <nav className="header__nav">
            {headerLinks.map((link)=>{
                return <NavLink onClick={onClose} className={`header__nav__item `} key={link.path} to={link.path}>{link.label}</NavLink>
            })}
        </nav>
    </motion.header>
  ) 
}

export default Header