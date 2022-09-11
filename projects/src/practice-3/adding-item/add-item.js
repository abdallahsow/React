import './styles.css'

const App = () => {
  const thingsArray = ["Thing 1", "Thing 2", "Thing 3"];
  const thingsElement = thingsArray.map((thing) => <p className='item' key={thing}>{thing}</p>);
  
    return (
    <div>
      <button>Add item</button>
      {thingsElement}
    </div>
  );
};

export default App;
