import "./Home.css";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
`;

function template() {
  return (
    <div className="home">
      <Title>Home</Title>
    </div>
  );
};

export default template;
