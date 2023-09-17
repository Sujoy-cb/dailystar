import { Container } from "react-bootstrap";
import dynamicnews from "../dynamicNews/dynamicNews.json"

const News = () => {
  return (
    <>
      <div className="news_part p-4">
        <Container>
          <div className="dynamic_news">
            <div className="main-card d-flex flex-wrap justify-content-between">
              {dynamicnews.filter(cat=>cat.includes("top").map((item)=>(
                <>
                  <div className="card ">
                    <h2>{item.title}</h2>
                    <p>{item.news}</p>
                  </div>
                </>
              )))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default News;
