import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../component/Title/Title";

const News = () => {
  let [news, setNews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/dynamicNews.json");
      const news = await response.json();
      let newsData = news.filter((item) => item.cat == "top");
      setNews(newsData);
    };
    getData();
  }, []);

  return (
    <>
      <div className="news_part">
        <Container fluid>
          <div className="dynamic_news">
            <div className="header_title">
              <Title title={"Top News"} />
            </div>
            <Row>
              <Col>
                <div className="main-card d-flex flex-wrap justify-content-between">
                  {news.map((item) => (
                    <>
                      <div className="card ">
                        <div className="img">
                          <img
                            src={item.img}
                            alt=""
                          />
                        </div>
                        <p>{item.news}</p>
                      </div>
                    </>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default News;
