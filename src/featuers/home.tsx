import cover from "../assets/photos/cover.jpg"
import Container from "../components/container"
import Devider from "../components/devider"
import ListAccordian from "../components/list-accordian"

//kontent za listu uvjeta
const content=[
  <p>Generacijski kod znači da članovi <span>Pijane Družine</span> MORAJU biti rođeni prije 2005. godine</p>,
  <p>Gurman piva <span>MORA</span>, i kad kažem <span>MORA</span> to znači da on <span>MORA</span> voljeti piti craft pivo pod nazivom{<span>AMBER</span>}</p>,
  <p>Određeno ponašanje je <span>NAJBITNIJi</span> uvjet koji potencijalan član treba posjedovati</p>
]
//
const Home = () => {
  return (
    <Container>
    <div className="home">
    <h1>PIJANA DRUŽINA</h1>
    <Devider/>
    <img src={cover} className="home__cover" />
    <section>
      <h2>About us</h2>
      <p><span>Pijana Družina</span> je ime grupe koju sam izmislio jučer
        jer ustvari mi nemamo OFFICIAL ime. <br />
      </p>
      <p>U <span>Pijanoj Družini</span> su po defaultu 4 lika kako bi rekli Ameri " SQUAD ".<br />
      Iako se sa vremena na vrijeme u <span>Pijanu Družinu</span> znaju PRIVREMENO pridružiti
      ostali članovi ljudske populacije, u<span>Pijanu Družinu</span> se može uči pod vrlo striktnim
      uvjetima tj. MORA imati sva 3 navedene mogučnosti :
      </p>
      <article>
      <h2>UVJETI :</h2>
      <ol className="accordian__list">
        <ListAccordian id={"1"} title="Generacijski kod" description={content[0]}/>
        <ListAccordian id={"2"} title="Gurman piva" description={content[1]}/>
        <ListAccordian id={"3"} title="određeno ponošanje" description={content[2]}/>
      </ol>
      <h3><u>Poželjni trait-ovi</u> :</h3>
      <ul>
        <li>Automobil u vlasništvu (dodatni bodovi ako je nesvakidašnje marke ili modela).</li>
        <li>Biti glazbeno osjiešten, pošto su svi u družini muzičari, neki više neki manje.</li>
        <li>Imati para za cugu . . .</li>
      </ul>
      </article>
    </section>
    <Devider/>
    
    </div>
    </Container>
  )
}

export default Home