import PropTypes from "prop-types";
const Card = ({ backgroundColor,title, value, description }) => {

 const divStyle ={
    width : "100%",
    height : "100px",
    borderRadius: "8px",
    padding: "8px",
    backgroundColor: backgroundColor,
 }
  return (
    <div style={divStyle}>
      <p className="text-[8px] font-bold">{title}</p>
      <div className="flex flex-col items-center mt-4">
        <p className="font-bold">{value}</p>
        <p className="text-[8px]">{description}</p>
      </div>
    </div>
  );
};

export default Card;


Card.propTypes = {
 backgroundColor: PropTypes.string.isRequired,
 title: PropTypes.string.isRequired,
 value: PropTypes.string.isRequired,
 description: PropTypes.string.isRequired
};