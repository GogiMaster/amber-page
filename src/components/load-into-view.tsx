import {motion, useAnimation, useInView } from "framer-motion"
import {useRef,useEffect} from "react"


type HomeArticlesProps={
    children:JSX.Element
}
const intoViewLoad={
    hidden:{
      opacity:0,
      x:"-20rem"
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        delay:.1,
        duration:.5
      }
    }
  }
const LoadIntoView = ({children}:HomeArticlesProps) => {
    const loadingRef = useRef(null)
  const inView = useInView(loadingRef, {once:true})

  const mainControl = useAnimation()

  useEffect(() => {
    if(inView){
      mainControl.start("visible")
    }
  }, [inView])

  return (
    <motion.div
    ref={loadingRef}
     variants={intoViewLoad}
     initial="hidden"
     animate={mainControl}
    >{children}</motion.div>
  )
}

export default LoadIntoView