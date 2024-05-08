import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import CommentForm from './CommentForm';
import PostDisplay from './PostDisplay';
import UserForm from './UserForm';

function App() {
  return (
    <div >
      <header className="App-header">
        <Navbar/>
        <PostDisplay/>
      
      </header>
    </div>
  );
}

export default App;
