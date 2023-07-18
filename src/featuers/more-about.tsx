import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Container from "../components/container"
import Devider from "../components/devider";

type MoreAboutListType={
    id:string;
    text:JSX.Element;
    active:boolean;
}

const moreAboutList:MoreAboutListType[]=[
    {
        id:"1",
        text: <div className="home">
            <h1>Generacijski Kod</h1>
            <Devider/>
            <p>Generacijski kod znači da članovi <span>Pijane Družine</span> Moraju biti rođeni prije 2005. godine</p>
            <p>Pošto su trenutno postoječi članovi kolektivno rođeni 2003. godine, smatramo i uvjereni smo  (iz iskustva)
            da po naše dobro (mentalno, financijsko, spiritualno stanje) nije pametno primati u zajednicu osobe rođene van dopuštene dobne skupine.</p>
            <p>Kako je na snazi trenutno pravilo koje se odnosi na sve koji su rođeni nakon 2005. godine, nemamo određeno dopušteno godište za rođene prije 2005. godine,
            mada smo sigurni da starija demografija <span>GEN Z-a</span> može uči u družinu. A po neslužbenim podatcima sa Googleta najstariji <span>GEN Z </span> {" "}
            domorodci su rođeni 1996. godine.
            </p>
        </div>
        ,
        active:false
    },
    {
        id:"2",
        text: <div className="home">
            <h1>Gurman Piva</h1>
            <Devider/>
            <p>Gurman piva <span>MORA</span>, i kad kažem <span>MORA</span>, to znači da on <span>MORA</span> voljeti piti craft pivo pod nazivom <span>AMBER</span>.</p>
            <p>Pošto je naša <span>Pijana Družina</span> maltene začeta prvim dodirom usta sa kriglom u kojoj bijaše <span>AMBER</span> {" "} 
             svaki član <span>MORA</span> obožavati piti <span>AMBER</span>, jer takva je naša tradicija i predanost pivu.</p>
            <p>Ako ne voliš <span>AMBER</span> i Žuja ti je zakon, fino nam pokucaj na vrata, mi će mo te pustit, i sa Janovog balkona te baciti da se GONIŠ U ***** **** ******** ! ! ! ! {' '} 😁</p>
        </div>,
        active:false
    },
    {
        id:"3",
        text: <div className="home">
            <h1>ODREĐENO PONAŠANJE</h1>
            <Devider/>
            <p>Određeno ponašanje je <span>NAJBITNIJ </span> uvjet koji potencijalan član treba posjedovati.</p>
            <p>Pošto smo mi u <span>Pijanoj Družini </span> dostigli svoj unutarnji mir, slobodno umni smo i WE DON'T CARE ZA SVE.
            A to znači da bacamo nepotrebne šale, komentare, osuđivanja itd. i to sve u šaljivom kontextu i nema ljutnje.</p>
            <p>I ako jedan član bude sa neizmjernom kontrolom počeo verbalno napadati aka. bulijati, svi ostali članovi imaju 
            dozvolu za obranu napadnute pičke. A to podrazumjeva :</p>
            <ul>
                <li>Udaranje šakama</li>
                <li>Udaranje nogama</li>
                <li>Udaranje glavom ako umeš</li>
                <li>Razbijanje krigle ili nekog drugog staklenog objekta za pohranu tekučine</li>
                <li>Bacanje stolice/stola</li>
                <li>Udarac pepeljarom</li>
                <li>Zvanjem konobara za dodatan alat za mučenje (votka na ranu)</li>
                <li>Bacanjem na cestu i gaženje prijevoznim sredstvom</li>
            </ul>
            <hr />
            <p>Nakon svih poduzetih mjera za obranu žrtve, završni čin je nedolazak napadaču na sahranu . . . .<span>AMEN</span> </p>
        </div>,
        active:false
    }
]

const MoreAbout = () => {
    let {moreAboutId}=useParams()

    const [moreAbout,setMoreAbout]=useState<MoreAboutListType[]>(moreAboutList)

    

    const handleMoreAbout=()=>{
        const updatedMoreIds: MoreAboutListType[] = [];
        moreAbout.forEach((item) => {
          updatedMoreIds.push({
            ...item,
            active: item.id === moreAboutId,
          });
        });
        setMoreAbout(updatedMoreIds);
    }
    useEffect(() => {
        handleMoreAbout()
        window.scrollTo({
            top:0
        }); // Scroll to the top of the page  
      }, []);
    
  return (
    <Container>
         {moreAbout.map((list) =>
        list.active && <div key={list.id}>{list.text}</div>
      )}
        {!moreAbout.some((item) => item.active) && (
        <div>
            <h1>ERROR 404 OVA STRAICA NE POSTOJI</h1>
            <p>MOLIM VAS DA SE BJEŽITE AKO OVO VIDITE</p>
        </div>
      )}
     

    </Container>
  )
}

export default MoreAbout