import Container from "../../components/container"
import NewsAccordian from "./news-accordian"

import { novosti } from "./NOVOSTI"
const News = () => {
  return (
    <Container>
      <div>
          <h1>Najnovije Vijesti</h1>
        
          <div className="news">
          {novosti.map((news)=>{
            return<div key={news.id}>
            <NewsAccordian open={news.id} date={news.datum} title={news.naslov} news={news.opis}/>
            </div>
          })}
          </div>
          </div>
    </Container>
  )
}

export default News