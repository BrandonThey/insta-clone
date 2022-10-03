
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import PostDisplay from './containers/PostDisplay/PostDisplay';
import ProfileSection from './containers/ProfileSection/ProfileSection';
import StoriesSection from './containers/StoriesSection/StoriesSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <div className="App-Content">
        <ProfileSection />
        <StoriesSection />

        <div className="Post-display">
          <div className="Post-display-navbar">

          </div>
          <div className="Post-display-content">
            <PostDisplay />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
