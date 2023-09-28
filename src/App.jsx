import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  let [trending, setTrending] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await fetch("/dynamicNews.json");
      let getRecentnews = await res.json();
      let newsData = getRecentnews.filter((item) => item.cat == "recent");
      setTrending(newsData);
    };
    getNews();
  }, []);
  console.log(trending);

  return (
    <>
      <div className="home_page">
        <Container fluid>
          <div className="upper_news">
            <Row>
              {trending.map((nitem) => (
                <>
                  <Col xs={6}>
                    <h2 className="news_title">{nitem.title}</h2>
                    <p>{nitem.news}</p>
                    <div className="img">
                      <img
                        src={nitem.img}
                        alt=""
                      />
                    </div>
                  </Col>
                </>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
