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
      height:0,
      y:-30,
    },
    visible:{
      height:"12rem",
        y:0,
        opacity:1,
        zIndex:[0,0,0,0,0,0,1],
        transition:{
            duration:0,
            ease:"linear"
        }
  },
    visibleNews:{
        y:0,
        height:"fit-content",
        opacity:1,
        zIndex:[0,0,0,0,0,0,1],
        transition:{
            duration:.5,
            ease:"linear"
        }
  },
  exit:{
    y:-30,
    opacity:[1],
    zIndex:-2,
    transition:{duration:.1}
  }
}

const ListAccordian = ({id,title="Title",description=<p>Description</p>}:AccordianProps) => {
const[accordian,setAccordian]=useState<boolean>(false)
const toggleAccrodian=()=>{
    setAccordian(!accordian)
}

  return (<>
    <div  className={`accordian ${accordian && "open"}`}>
      <section className="accordian__header">
        <li onClick={()=>toggleAccrodian()} className={`accordian__header__title ${accordian && "open"} `}>
          <div>{title} <ArrowDown /></div>
        </li>
         

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
      </section>
    </div>

  </>
  )
}

export default ListAccordian