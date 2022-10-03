
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfileSection from './containers/ProfileSection/ProfileSection';
import StoriesSection from './containers/StoriesSection/StoriesSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ProfileSection />
      <StoriesSection />

    </div>
  );
}

export default App;
