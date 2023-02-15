import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1Sx-ANh__AJSkSOMEK_JAcqK6MCw9dwgG/view?usp=sharing"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
      <a href={"#contact"} className="btn">
        Say, Hello 👋
      </a>
    </div>
  );
};

export default CTA;
