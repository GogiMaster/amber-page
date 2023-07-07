import { useState } from "react"
import ArrowDown from "../assets/photos/icons/arrowDown"
import { NavLink } from "react-router-dom";

type AccordianProps={
    title?:string;
    description?:JSX.Element;
    id:string;
}

const Accordian = ({id,title="Title",description=<p>Description</p>}:AccordianProps) => {
const[accordian,setAccordian]=useState<boolean>(false)
const toggleAccrodian=()=>{
    setAccordian(!accordian)



}
  return (<>
    <div onClick={()=>toggleAccrodian()} className={`accordian ${accordian && "open"}`}>
      <section className="accordian__header">
        <li>{title}</li>
         <ArrowDown />
      </section>
         {accordian && <>
    <div className={`accordian__drop ${accordian && "open"}`}>
      {description}
      <h3><NavLink to={`/more-about/${id}`}>VIŠE . . .</NavLink></h3>
    </div>
    </>}
    
    </div>
  </>
  )
}

export default Accordian