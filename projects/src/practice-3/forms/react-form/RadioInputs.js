const Radio = ({ type, id, labelName }) => {
  return (
    <>
      <input className="radio" type={type} id={id} />
      <label htmlFor="">{labelName}</label>
      <br />
    </>
  );
};

export default Radio;
