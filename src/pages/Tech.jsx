import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../component/Title/Title";

const Tech = () => {
  let [technews, setTechnews] = useState([]);
  let [technews2, setTechnews2] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/dynamicNews.json");
      const news = await response.json();
      let newsData = news.filter((item) => item.cat == "tech");
      setTechnews(newsData);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/dynamicNews.json");
      const news = await response.json();
      let newsData = news.filter((item) => item.cat == "lefttech");
      setTechnews2(newsData);
    };
    getData();
  }, []);

  return (
    <>
      <div className="news_part p-4">
        <div className="header_title">
          <Title title="Tech News" />
        </div>
        <Row>
          <Col xs={6}>
            {technews2.map((item) => (
              <>
                <h3 className="mt-4">{item.title}</h3>
                <div className="img mt-4">
                  <img
                    src={item.img}
                    alt=""
                  />
                </div>
                <p className="mt-2">{item.news}</p>
              </>
            ))}
          </Col>
          <Col xs={6}></Col>
        </Row>
      </div>
    </>
  );
};

export default Tech;
