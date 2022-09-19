const Input = function ({ type, name, placeholder, updatingFunc, state }) {
  return (
    <input
      className="input-form"
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={updatingFunc}
    />
  );
};

export default Input;
