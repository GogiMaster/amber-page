import garden from "../assets/photos/garden.jpg"
import {motion} from "framer-motion"


const logoVariants={
  hidden:{
    opacity:0,
    zIndex:2
  },
  visible:{
    opacity:1,
  }
}

const Logo = () => {
  return (
    <>
        <motion.div className="logo"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        transition={{delay:.1,duration:1}}
        >
                <motion.img src={garden} 
                initial={{y:-1000,x:"-50%"}}
                animate={{y:0,x:"-50%"}}
                transition={{delay:.5,duration:.7}}
                />
            <motion.div className="logo__title"
            variants={logoVariants}
            transition={{delay:1.2,staggerChildren:1.7}}
            >
                <motion.h1 variants={logoVariants}>PIJANA DRUŽINA</motion.h1>
                <motion.p variants={logoVariants}>Osnovani prošle Godine</motion.p>
            </motion.div>
        </motion.div>
    </>
  )
}

export default Logo