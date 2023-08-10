import Container from "../../components/container"
import Devider from "../../components/devider";

//content
import skeri from "../../assets/archive/skeri.jpg"
//
type ArchiveType = {
    content:JSX.Element;
    id:number;
    datum:string;
} 

const ytShortHeight = 504;

const archive:ArchiveType[] =[
    {   datum:"2.10.2022",
        id:1,
        content:<iframe className="zabava__video" height={ytShortHeight}  src={"https://youtube.com/embed/QUyV6F5wJMs?feature=share"}/>
    },
    {   datum:"27.5.2023",
        id:2,
        content:<iframe className="zabava__video" src={"https://www.youtube.com/embed/_gvPg-lsq-U"}/>
    },
    {   datum:"1.6.2023",
        id:3,
        content:<iframe height={ytShortHeight} className="zabava__video"  src={"https://youtube.com/embed/V1LNPM61LAQ?feature=share"}/>
    },
    {   datum:"1.7.2023",
        id:4,
        content:<img className="zabava__video" src={skeri}/>
    },
    {   datum:"22.7.2023",
        id:5,
        content:<iframe className="zabava__video" height={ytShortHeight} src={"https://youtube.com/embed/Bfm-WhyTydA"}/>
    },
    {   datum:"30.4.2023",
        id:6,
        content:<iframe className="zabava__video" height={ytShortHeight} src="https://www.youtube.com/embed/bNlg0sd4hEc"/>
    },
    {   datum:"8.7.2023",
        id:7,
        content:<iframe className="zabava__video" height={ytShortHeight} src={"https://youtube.com/embed/7WOqGprxHHo"}/>
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