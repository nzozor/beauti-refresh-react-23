import React from "react";

const BookButton: React.FC = () => {
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
