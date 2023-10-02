import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const RecentNews = () => {
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

  return (
    <>
      <div className="upper_news">
        <Row>
          {trending.map((item) => (
            <>
              <Col xs={6}>
                <Link to={item.link}>
                  <h2 className="news_title">{item.title}</h2>
                </Link>
                <p>{item.news}</p>
                <p className="time">34min ago</p>
                <Link to={item.link}>
                  <div className="img">
                    <img
                      src={item.img}
                      alt=""
                    />
                  </div>
                </Link>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </>
  );
};

export default RecentNews;
