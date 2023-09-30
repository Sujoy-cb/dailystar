import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Title from "../component/Title/Title";
const Sports = () => {
  let [trending, setTrending] = useState([]);
  let [trending2, setTrending2] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await fetch("/dynamicNews.json");
      let getRecentnews = await res.json();
      let newsData = getRecentnews.filter((item) => item.cat == "singlesports");

      setTrending(newsData);
    };
    getNews();
  }, []);

  useEffect(() => {
    const getNews = async () => {
      const res = await fetch("/dynamicNews.json");
      let getRecentnews2 = await res.json();
      let newsData2 = getRecentnews2.filter((item) => item.cat == "sports");

      setTrending2(newsData2);
    };
    getNews();
  }, []);

  return (
    <>
      <div className="upper_news">
        <div className="header_title">
          <Title title="Sports News" />
        </div>
        <Row>
          <Col xs={6}>
            {trending.map((item) => (
              <>
                <h3 className="mt-4">{item.title}</h3>
                <p>{item.news}</p>
                <div className="img">
                  <img
                    src={item.img}
                    alt=""
                  />
                </div>
              </>
            ))}
          </Col>
          <Col xs={6}>
            {trending2.map((item) => (
              <>
                <div className="sports_col">
                  <h3>{item.title}</h3>
                  <p>{item.news}</p>
                </div>
              </>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Sports;
