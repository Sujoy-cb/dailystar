import Container from "react-bootstrap/Container";
import dynamicnews from "../dynamicNews/dynamicNews.json";

const DynamicNews = () => {
  return (
    <>
      <Container>
        <div className="dynamic_news">
          {dynamicnews.map((item) => (
            <>
              <h2>{item.category}</h2>
              <p>{item.news}</p>
            </>
          ))}
        </div>
      </Container>
    </>
  );
};

export default DynamicNews;
