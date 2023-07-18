import {
     //ReactNode,
        useState,useEffect } from "react";
import ArrowTop from "../assets/photos/icons/arrowTop";

type ButtonProps={
    type?:"btn"| "scrollToTop";
   // children?:ReactNode;
    text?:string
}

const Button = ({
        type="btn",
        //children,
        text="CLICK"
    }:ButtonProps) => {

    const [scrollTop,setScrollToTop]= useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 550){
                setScrollToTop(true)
            }else{
                setScrollToTop(false)
            }
        })
    }, [])
    
    const topFunction=()=> {
       window.scrollTo({
        top:450,
        behavior:"smooth"
       })
      }
  return (<>
    {type==="btn" &&
  <button className="button">{text}</button>
    }
    {type==="scrollToTop" && scrollTop && 
    <div   className="button__scrollToTop" onClick={()=>topFunction()} id="myBtn" title="Go to top"><ArrowTop/></div>
    }
    
    
  
  </>
  )
}

export default Button