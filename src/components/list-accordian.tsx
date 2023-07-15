import { useState } from "react"
import ArrowDown from "../assets/photos/icons/arrowDown"
import { NavLink } from "react-router-dom";
import {motion,AnimatePresence} from "framer-motion";

type AccordianProps={
    title?:string;
    description?:JSX.Element;
    id:string;
}

export const accordianVariants={
  hidden:{
      opacity:0,
      y:-51,
    },
    visible:{
        y:0,
        opacity:1,
        transition:{
            duration:.1,
        }
  },
  exit:{
    y:-100,
    opacity:0,
    transition:{duration:.2}
  }
}

const ListAccordian = ({id,title="Title",description=<p>Description</p>}:AccordianProps) => {
const[accordian,setAccordian]=useState<boolean>(false)
const toggleAccrodian=()=>{
    setAccordian(!accordian)
}

  return (<>
    <div onClick={()=>toggleAccrodian()} className={`accordian ${accordian && "open"}`}>
      <section className="accordian__header">
        <li className="accordian__header__title">{title}</li>
         <ArrowDown />
      </section>
      <AnimatePresence mode="wait">
        
         {accordian && <>
    <motion.div
      className={`accordian__drop ${accordian && "open"}`}
      variants={accordianVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{duration:.5}}
      >
        <div>{description}</div>
      <h3><NavLink to={`/amber-page/more-about/${id}`}>VIŠE . . .</NavLink></h3>
    </motion.div>
    </>}
      </AnimatePresence>
    
    </div>
  </>
  )
}

export default ListAccordian