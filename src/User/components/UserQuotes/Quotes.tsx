import React from "react";

import "./Quotes.less";

interface Props {
  message: string;
}

const Quotes: React.FC<Props> = ({ message }) => {
  return (
    <div className="Quotes">
      <span className="Quote">{message}</span>
    </div>
  );
};

export default Quotes;
