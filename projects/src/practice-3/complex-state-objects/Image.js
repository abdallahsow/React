import emptyStar from "./images/star-empty.png";
import filledStar from "./images/star-filled.png";

const Img = ({ isFilled, handleClick }) => {
  let starIcon = isFilled ? filledStar : emptyStar;

  return (
    <img
      className="user-star"
      src={starIcon}
      alt="star"
      onClick={handleClick}
    />
  );
};

export default Img;
