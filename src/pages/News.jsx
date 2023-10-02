import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../component/Title/Title";
import { Link } from "react-router-dom";

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
              <Title title="Top News" />
            </div>
            <Row>
              {news.map((item) => (
                <>
                  <Col xs={3}>
                    <>
                      <div className="card ">
                        <Link to={item.link}>
                          <h3>{item.title}</h3>
                        </Link>
                        <p>{item.news}</p>
                        <Link to={item.link}>
                          <div className="img">
                            <img
                              src={item.img}
                              alt=""
                            />
                          </div>
                        </Link>
                      </div>
                    </>
                  </Col>
                </>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default News;
