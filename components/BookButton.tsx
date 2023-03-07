import React from "react";
import styled from "styled-components";

const BookButton: React.FC = () => {
  const LogoContainer = styled.a`
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    display: none;
    font-family: "Nunito Sans", sans-serif;
    height: 46px;
    align-items: center;
    padding: 5px 50px;
    border-radius: 2px;
    padding: 5px 50px;
    background-color: #c7cbd6;
    color: #fff;
    font-family: Nunito Sans, sans-serif;
    width: fit-content;
    font-size: 13px;

    @media (min-width: 600px) {
      display: flex;

    }
  `;
  const treatWellLink =
    "https://widget.treatwell.co.uk/place/beauti-skin-clinic/";
  return (
    <LogoContainer
      href={treatWellLink}
      className="book-now"
      target="_blank"
      rel="noreferrer"
    >
      <h2>Book now</h2>
    </LogoContainer>
  );
};

export default BookButton;
