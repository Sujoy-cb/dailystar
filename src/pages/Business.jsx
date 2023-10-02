import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../component/Title/Title";

const Business = () => {
  let [news, setNews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/dynamicNews.json");
      const news = await response.json();
      let newsData = news.filter((item) => item.cat == "business");
      setNews(newsData);
    };
    getData();
  }, []);

  return (
    <>
      <div className="header_title">
        <Title title="Business News" />
      </div>
      <Container fluid>
        <div className="business_news">
          <Row>
            {news.map((item) => (
              <>
                <Col xs={4}>
                <div className="img mt-4">
                    <img
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <h3 className="mt-4">{item.title}</h3>
                  <p>{item.news}</p>
                  
                </Col>
              </>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Business;
