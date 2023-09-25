import Container from "react-bootstrap/Container";
import dynamicnews from "../dynamicNews/dynamicNews.json";

const DynamicNews = () => {
  console.log("hello world")
  return (
    <>
      <div className="news_part p-4">
        <Container>
          <div className="dynamic_news">
            <div className="main-card d-flex flex-wrap justify-content-between">
              {dynamicnews.map((item) => (
                <>
                  <div className="card ">
                    <h2>{item.title}</h2>
                    <p>{item.news}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DynamicNews;
