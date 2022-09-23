import React, { useEffect } from "react";
import Header from "../compenents/Header";
import AddBookForm from "../compenents/AddBookForm";

const AddBook = (props) => {
  useEffect(() => {
    Document.title = "Kitaplık - Kitap Ekle";
  }, []);
  return (
    <div>
      <Header />
      <AddBookForm />
    </div>
  );
};

export default AddBook;
