
type NovostiType={
    naslov:string;
    opis:JSX.Element;
    id:number;
    datum:string;
}
export const novosti:NovostiType[]=[
    {
        naslov:"Gogi završio tečaj napokon",
        id:1,
        datum:"10.7.2023.",
        opis:<div>
        <p>Na današnji dan član ove družine je završio zadnji dan tečaja za Front-End Developera
            u Osijeku koji mu je omogučio i pružio znanje da 
            napravi ovu malu stranicu sam.</p>
        <p>Prvi dan tečaja je bio 27.2.2023. i nevjerovatno brzo je prošlo vrijeme. <br />
        Sada kada je sve to gotovo Goran se priprema i nada se brzome zapošljavanju u struci te da se iseli iz ove vuko****ne.

        </p>
        </div>
    },
    {
        naslov:"Stric u boci party",
        id:2,
        datum:"31.7.2023.",
        opis:<div>
        <p>
            U DVD-u Našice se organizirala mala proslava povodom obavljanja uspješne transakcije
            u kupovini gajbe Ambera. Petak 28.Srpanja je zabilježen kao zabavno okupljanje 
            uže grupe frendova koji uživaju u Amberu.
        </p>
        <p>
            Tijekom zabave novo otkriveni specimen čovjeka je otkriven koji ispunjava 
            do sada pokazane kriterije za ulazak u družinu. Dodatna testiranja su potrebna
            radi sigurnosti.
        </p>
        </div>
    },
]