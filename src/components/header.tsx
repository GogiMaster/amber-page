import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./hambuerger";

export type LinkType = {
  path: string;
  label: string;
};
const headerLinks:LinkType[]=[
    {
        path:"/",
        label:"Home"
    },
    {
        path:"/contact",
        label:"Kontakt"
    },
    {
        path:"/news",
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
    <header className="header">{children}
    <Hamburger toggle={sidebarToggle}/>
        <nav className="header__nav">
            {headerLinks.map((link)=>{
                return <NavLink onClick={onClose} className={`header__nav__item `} key={link.path} to={link.path}>{link.label}</NavLink>
            })}
        </nav>
    </header>
  ) 
}

export default Header