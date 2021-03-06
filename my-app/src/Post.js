import React, { useState, useEffect } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const HtmlApp = (value) => {
  return (
    <>
      <Jumbotron>
        <h1>{value.data.title}</h1>
        <p
          className="content-html"
          dangerouslySetInnerHTML={{ __html: value.data.body }}
        />
      </Jumbotron>
    </>
  );
};

const Post = (props) => {
  const [data, setData] = useState([]);
  const [dataStatus, setDataStatus] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setDataStatus(true);
      });
  }, []);

  return <>{dataStatus ? <HtmlApp data={data} /> : <h1>Loading</h1>}</>;
};
export default Post;
