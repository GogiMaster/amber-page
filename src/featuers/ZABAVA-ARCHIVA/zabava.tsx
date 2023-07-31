import Container from "../../components/container"
import Devider from "../../components/devider";

//content
import pijenje from "../../assets/archive/pijenje-duo.mp4"
import euro from "../../assets/archive/50euro.mp4"
import beninging from "../../assets/archive/beninging.mp4"
import brkovi from "../../assets/archive/brkovi.mp4"
import skeri from "../../assets/archive/skeri.jpg"
import ukulele from "../../assets/archive/ukulele.mp4"
import ovca from "../../assets/archive/ovca.mp4"

//
type ArchiveType = {
    content:JSX.Element;
    id:number;
    datum:string;
} 

const archive:ArchiveType[] =[
    {   datum:"2.10.2022",
        id:1,
        content:<video className="zabava__video" controls src={beninging}/>
    },
    {   datum:"27.5.2023",
        id:2,
        content:<video className="zabava__video" controls src={brkovi}/>
    },
    {   datum:"1.6.2023",
        id:3,
        content:<video className="zabava__video" controls src={euro}/>
    },
    {   datum:"1.7.2023",
        id:4,
        content:<img className="zabava__video" src={skeri}/>
    },
    {   datum:"22.7.2023",
        id:5,
        content:<video className="zabava__video" controls src={pijenje}/>
    },
    {   datum:"30.4.2023",
        id:6,
        content:<video className="zabava__video" controls src={ukulele}/>
    },
    {   datum:"8.7.2023",
        id:7,
        content:<video className="zabava__video" controls src={ovca}/>
    },
]


const Zabava = () => {
  return (
    <Container>
        <h1>Random activites archive</h1>
        <div>
            {archive.map((archive)=>{
                return <div className="zabava" key={archive.id}>
                    {archive.content}
                    {archive.datum}
                    <Devider/>
                    </div>
            })}
        </div>
    </Container>
  )
}

export default Zabava