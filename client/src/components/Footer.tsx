import React from "react";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="footer container text-center">
      <span className="text-muted small">&copy;2020 smm</span>
    </footer>
  );
};

export default Footer;
