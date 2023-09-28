import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

const DynamicNews = () => {
  let [newsdata, setNewsData] = useState([])

  useEffect(()=>{
    const getData = async ()=>{
      const response = await fetch('/dynamicNews.json')
      const news = await response.json()
      let newsData = news.filter((item)=> item.cat)
      setNewsData(newsData)
    }
    getData()
  },[])
  return (
    <>
      {/* <div className="news_part p-4">
        <Container>
          <div className="dynamic_news">
            <div className="main-card d-flex flex-wrap justify-content-between">
              {newsdata.map((item) => (
                <>
                  <div className="card ">
                    <h2>{item.title}</h2>
                    <div className="img">
                      <img src={item.img} alt="" />
                    </div>
                    <p>{item.news}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </Container>
      </div> */}
    </>
  );
};

export default DynamicNews;
