import React, { useEffect, useState } from "react";
import Axios from "axios";
import NewsHead from "./NewsHead";

const News = () => {
  const [res, setRes] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      Axios.get(
        `http://newsapi.org/v2/top-headlines?q=${query}&country=in&apiKey=97fb372643bd4d6796ad5d61caba8eae`
      )
        .then((response) => {
          const result = response.data.articles;
          setRes(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [query]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h1 className="mx-3">Hot News in India</h1>
        <input
          className="mx-3 my-2"
          type="text"
          onChange={(e) => handleChange(e)}
          value={query}
          placeholder="Search"
        ></input>
      </div>

      {res.length
        ? res.map((element, index) => (
            <NewsHead
              key={index}
              index={index}
              title={element.title}
              desc={element.description}
              url={element.url}
            />
          ))
        : null}
    </div>
  );
};

export default News;
