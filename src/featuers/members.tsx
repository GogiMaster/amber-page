import Container from "../components/container"
import goran from "../assets/photos/goran.jpg"
import jan from "../assets/photos/jan.jpg"
import matej from "../assets/photos/gašo.jpg"
import patrik from "../assets/photos/paco.jpg"
import Instagram from "../assets/photos/icons/icons8-instagram.svg"
import Devider from "../components/devider"

type MembersType={
    name:string;
    lastName:string;
    nickName:string
    slika:string;
    instaLink:string;
    instagram:string;
    vozilo:string;
}

const members:MembersType[]=[
    {
        name:"Goran",
        lastName:"Viljanac",
        slika:goran,
        nickName:"Gogi",
        vozilo:"Volvo",
        instaLink:"https://www.instagram.com/goran_viljanac/",
        instagram:"goran_viljanac",
    },
    {
        name:"Matej",
        lastName:"Gašparić",
        slika:matej,
        nickName:"Gašo",
        vozilo:"Vlak",
        instaLink:"https://www.instagram.com/matej_gaso/",
        instagram:"matej_gaso",
    },
    {
        name:"Patrik",
        lastName:"Umiljanovič",
        slika:patrik,
        nickName:"Pačo",
        vozilo:"Citroen, Chrysler",
        instaLink:"https://www.instagram.com/pacho007_/",
        instagram:"pacho007_",
    },
    {
        name:"Jan",
        lastName:"Strapač",
        slika:jan,
        nickName:"Janzo",
        vozilo:"Biciklo",
        instaLink:"https://www.instagram.com/capn_yanzo/",
        instagram:"capn_yanzo",
    },
]


const Members = () => {
  return (
    <Container>
        <div className="member">
       {members.map((member)=>{
        return (
        <div key={member.lastName}>
            <section className="member__header">
                <div className="member__header__info">
                <h2>{member.name} {member.lastName} </h2>
                <p  className="member__header__info"> aka. {member.nickName}</p>
                </div>
                <div className="member__header__info">
                    <img src={Instagram} alt="Instagram icon" className="member__icon" />
                    <h3><a className="member__link" href={member.instaLink}>{member.instagram}</a></h3>
                </div>
            </section>
            <section className="member__body">
                <img src={member.slika} className="member__body__img"/>
                <p>
                <span>Prijevozno Sredstvo:</span> <span className="member__body__span">{member.vozilo} </span>

                </p>
            </section>
            <Devider/>
        </div>
        )
       })}

        </div>
    </Container>
  )
}

export default Members