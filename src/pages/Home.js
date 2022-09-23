import React, { useEffect } from "react";
import Header from "../compenents/Header";
import ListBooks from "../compenents/ListBooks";

const Home = (props) => {
  useEffect(() => {
    document.title = "Kitaplık";
  }, []);
  return (
    <div>
      <Header />
      <ListBooks />
    </div>
  );
};

export default Home;
