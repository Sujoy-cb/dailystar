import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
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
              {trending.map((nitem) => (
                <>
                  <Col xs={6}>
                    <h2 className="news_title">{nitem.title}</h2>
                    <p>{nitem.news}</p>
                    <p className="time">34min ago</p>
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
  </>
  )
};

export default RecentNews;
