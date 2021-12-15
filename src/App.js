import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/Post';

import urls from './Constants/genreUrls';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {
        urls.map((eachUrl, index) =>
          <Post key={index} urls = {eachUrl.url} title = {eachUrl.title} isSmall = {index === 0 ? false : true} />
        )
      }
    </div>
  );
}

export default App;
