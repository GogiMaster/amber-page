import { LinkType } from "./header";
import { NavLink } from "react-router-dom";


type SidebarProps={
    isOpen:boolean;
    onClose:()=>void;
}

const sidebarLinks:LinkType[]=[
    {
        path:"/members",
        label:"MEMBERS"
    },
]

const SideBar = ({isOpen,onClose}:SidebarProps) => {
  return (
    <aside className={`sidebar ${isOpen && "sidebar--open"}`}>
        <nav className="sidebar__content">
            {sidebarLinks.map((link)=>{
                return <NavLink className="sidebar__content__link" onClick={onClose} key={link.path} to={link.path}>{link.label}</NavLink>
            })}
        </nav>
    </aside>
  )
}

export default SideBar