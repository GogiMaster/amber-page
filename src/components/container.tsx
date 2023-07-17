import { ReactNode } from "react"
import {motion} from "framer-motion"

type ContainerProps={
    children:ReactNode;
}

export const pageLoadVariants={
  load:{
    x:"-100vw",
  },
  stand:{
    x:0,
    transition:{
      duration:.2,
   }
  },
  exit:{
    x:"100vw",
    transition:{
      duration:.3,
   }
  }
}


const Container = ({children}:ContainerProps) => {
  return (
    <motion.div className="container"
    variants={pageLoadVariants}
    initial="load"
    animate="stand"
    exit="exit"
    >{children} </motion.div>
  )
}

export default Container