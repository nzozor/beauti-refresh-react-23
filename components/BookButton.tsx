import React from "react";
import styled from "styled-components";

const BookButton: React.FC = () => {
  const LogoContainer = styled.a`
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0;
    width: 177px;

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
    <a
      href={treatWellLink}
      className="book-now"
      target="_blank"
      rel="noreferrer"
    >
      <h2>Book now</h2>
    </a>
  );
};

export default BookButton;
