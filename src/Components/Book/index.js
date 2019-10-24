import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBook = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 1em;
  background-color: #f2f2e2;
  margin: 1em;
  border-radius: 10px;
  p {
    padding: 0.2em;
  }
`;

const BookHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    margin: 0.5em;
  }
`;

const bookToIsbn = {
  Macroeconomics: "0538880457",
  Precalculus: "0673158721",
  "Electromagnetism, 2E": "0471927120",
  Engineering: "0023071303",
  "Linear algebra": "0201526751",
  "The American Pageant": "0618247327",
  Thermodynamics: "0070683050",
  Microeconomics: "0471457698",
  Calculus: "0534936245",
  "Applied calculus": "0534419585",
  "Calculus: A Modeling Approach": "0201122162",
  "Chemistry: The Molecular Nature of Matter and Change": "0697396002",
  "Psychology: Themes and Variations": "0495093033",
  "Economics: A Contemporary Introduction": "0538888490",
  "Physics: Principles With Applications": "0136724116"
};

const Book = props => {
  return (
    <StyledBook>
      <Link to={`/book/${props.bookid}`}>
        <BookHeader>
          <img
            src={`http://covers.openlibrary.org/b/isbn/${
              bookToIsbn[props.title]
            }-M.jpg`}
          />
          <p>{props.title}</p>
        </BookHeader>
        <p>Author(s): {props.author}</p>
        <p>Publisher: {props.publisher}</p>
        <p>License: {props.license}</p>
        <p>Reviews: {props.reviews.length}</p>
      </Link>
      <p>
        <span>{`Read Now: `}</span>
        <a
          href={`https://openlibrary.org/isbn/${bookToIsbn[props.title]}`}
          target="_blank"
        >
          openlibrary.org
        </a>
      </p>
    </StyledBook>
  );
};

export default Book;
