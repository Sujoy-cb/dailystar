import { useEffect,useState } from "react";
import { Container } from "react-bootstrap";
import newsItem from "../dynamicNews/dynamicNews.json";
// import DynamicNews from "../component/DynamicNews";

const News = () => {
  let [newsData, setNewsdata] = useState([])

  useEffect(() => {
    setNewsdata(newsItem)
  }, []);

  const topNews = newsData.filter((item) => item.cat == "top")

  // console.log(topNews)

  return (
    <>
      <div className="news_part p-4">
        <Container>
          <div className="dynamic_news">
          <h1>News</h1>
          {/* <div className="top_news">{topNews}</div> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default News;
