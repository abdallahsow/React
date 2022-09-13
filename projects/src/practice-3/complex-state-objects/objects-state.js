import './app.css'
import User from './images/user.png'
import emptyStar from './images/star-empty.png'

const App = () => {
    return (
      <article className="user">
        <img className="user-pic" src={User} alt="user" />
        <div>
          <img className="user-star" src={emptyStar} alt="star" />
          <h3 className="title">John Doe</h3>
          <p className="text">+ 1 (719) 555-1212</p>
          <p className="text">itsmyrealname@example.com</p>
        </div>
      </article>
    );
}

export default App