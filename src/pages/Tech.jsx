import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Title from "../component/Title/Title";
import { Link } from "react-router-dom";

const Tech = () => {
  let [technews, setTechnews] = useState([]);
  let [technews2, setTechnews2] = useState([]);
  let [technews3, setTechnews3] = useState([]);

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
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/dynamicNews.json");
      const news = await response.json();
      let newsData = news.filter((item) => item.cat == "tech2");
      setTechnews3(newsData);
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
                <Link to={item.link}>
                  <h3 className="mt-4">{item.title}</h3>
                </Link>

                <Link to={item.link}>
                  <div className="img mt-4">
                    <img
                      src={item.img}
                      alt=""
                    />
                  </div>
                </Link>
                <p className="left_news mt-2">{item.news}</p>
              </>
            ))}
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={6}>
                {technews.map((item) => (
                  <>
                    <Link to={item.link}>
                      <h3 className="mt-4">{item.title}</h3>
                    </Link>
                    <Link to={item.link}>
                    <div className="techimg mt-4">
                      <img
                        src={item.img}
                        alt=""
                      />
                    </div>
                    </Link>
                    <p className="mt-2">{item.news}</p>
                  </>
                ))}
              </Col>
              <Col xs={6}>
                {technews3.map((item) => (
                  <>
                    <Link to={item.link}>
                      <h3 className="mt-4">{item.title}</h3>
                    </Link>
                    <div className="techimg mt-4">
                      <img
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <p className="mt-2">{item.news}</p>
                  </>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Tech;
