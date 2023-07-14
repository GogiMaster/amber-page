import { useEffect, useState } from "react"
import ArrowDown from "../../assets/photos/icons/arrowDown";
import { novosti } from "./NOVOSTI";
import Devider from "../../components/devider";

type NewsAccordianProps={
    title:string;
    date:string;
    news:JSX.Element;
    open:number;
}

const NewsAccordian = ({title="NASLOV",news=<>Vijesti</>,date="00,00,2000",open}:NewsAccordianProps) => {
    const[accordian,setAccordian]=useState<boolean>(false)
    const toggleAccrodian=()=>{
    setAccordian(!accordian)
}
useEffect(()=>{
  if(open===novosti[novosti.length-1].id){
    setAccordian(true)
  }

},[])
  return (
    <>
    <div  className={`newsAccordian ${accordian && "open"}`}>
      <section onClick={()=>toggleAccrodian()} className="newsAccordian__header">
        <div className="newsAccordian__header__title">{title}</div>
        <div className="newsAccordian__header__div">
          
         {date}
          
         <ArrowDown />
        </div>
      </section>
         {accordian && <>
    <div className={`newsAccordian__drop ${accordian && "open"}`}>
      {news}
    </div>
    <Devider/>
    </>}
    
    </div>
    </>
  )
}

export default NewsAccordian