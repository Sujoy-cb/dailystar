import { Container } from "react-bootstrap";
import dynamicnews from "../dynamicNews/dynamicNews.json";

const News = () => {
  let newsArr = [dynamicnews];

  return (
    <>
      <div className="news_part p-4">
        <Container>
          <div className="dynamic_news">
            <div className="main-card d-flex flex-wrap justify-content-between">
              {newsArr.map(() => (
                <>
                  <div className="card ">News Page</div>
                </>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default News;
