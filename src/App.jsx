
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import PostDisplay from './containers/PostDisplay/PostDisplay';
import ProfileSection from './containers/ProfileSection/ProfileSection';
import StoriesSection from './containers/StoriesSection/StoriesSection';
import profiles from './data/profiles';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <div className="App-Content">
        <ProfileSection profiles={profiles}/>
        <StoriesSection profiles={profiles}/>

        <div className="Post-display">
          <div className="Post-display-navbar">

          </div>
          <div className="Post-display-content">
            <PostDisplay profiles={profiles}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
