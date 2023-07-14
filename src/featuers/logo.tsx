import garden from "../assets/photos/garden.jpg"
const Logo = () => {
  return (
    <>
        <div className="logo">
                <img src={garden} />
            <div className="logo__title">
                <h1>PIJANA DRUŽINA</h1>
                <p>Osnovani prošle Godine</p>
            </div>
        </div>
    </>
  )
}

export default Logo