type HamburgerProps={
    toggle:()=>void
}
const Hamburger = ({toggle}:HamburgerProps) => {
  return (
    <div className="hamburger" onClick={toggle}>
        <div className="hamburger__line"/>
        <div className="hamburger__line"/>
        <div className="hamburger__line"/>
    </div>

  )
}

export default Hamburger