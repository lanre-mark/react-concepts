import PropTypes from "prop-types";
import shortid from "shortid";

const id = `close${shortid.generate()}`;
const Icon = ({ title, desc, strokeColor, ...props }) => {
  return (
    <svg
      id={id}
      {...props}
      width="40px"
      height="40px"
      viewBox="0 0 40 40"
      version="1.1"
    >
      <title id={`${id}_Title`}>{title}</title>
      <desc id={`${id}_Desc`}>{desc}</desc>
      <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  strokeColor: PropTypes.string,
};

export default Icon;
