// import { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
import Title from "../component/Title/Title";

const Business = () => {
  // let [news, setNews] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch("/dynamicNews.json");
  //     const news = await response.json();
  //     let newsData = news.filter((item) => item.cat == "business");
  //     setNews(newsData);
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <div className="header_title">
        <Title title="Business News" />
      </div>
    </>
  );
};

export default Business;
