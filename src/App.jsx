import './App.scss';
import NavBar from './components/NavBar/NavBar';
import PostDisplay from './containers/PostDisplay/PostDisplay';
import ProfileSection from './containers/ProfileSection/ProfileSection';
import StoriesSection from './containers/StoriesSection/StoriesSection';
import profiles from './data/profiles';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div className="App-Content">
              <ProfileSection profile={profiles[0]}/>
              <StoriesSection profile={profiles[0]}/>

              <div className="Post-display">
                <div className="Post-display-navbar">

                </div>
                <div className="Post-display-content">
                  <PostDisplay profile={profiles[0]}/>
                </div>
              </div>
            </div>
          }></Route>
          <Route
            path={`/${profiles[1].profileName}`}
            element={
            <div className="App-Content">
              <ProfileSection profile={profiles[1]}/>
              <StoriesSection profile={profiles[1]}/>

              <div className="Post-display">
                <div className="Post-display-navbar">

                </div>
                <div className="Post-display-content">
                  <PostDisplay profile={profiles[1]}/>
                </div>
              </div>
            </div>
          }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;