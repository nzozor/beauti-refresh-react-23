import React from "react";
import styled from "styled-components";

const BookButton: React.FC = () => {
  const LogoContainer = styled.a`
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0;
    font-family: "Nunito Sans", sans-serif;
    height: 46px;
    display: flex;
    align-items: center;
    border-radius: 2px;
    padding: 5px 50px;
    background-color: #c7cbd6;
    color: #fff;
    font-family: Nunito Sans, sans-serif;
    font-size: 13px;
    @media (min-width: 1024px) {
      opacity: 1;
    }

    @media (max-width: 767px) {
      display: none;
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
