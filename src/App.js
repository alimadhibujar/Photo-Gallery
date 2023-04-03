import "./App.css";
import Gallery from "./component/gallery/Gallery.jsx";
function App() {
  return (
    <div className="App">
      <Gallery />
      <p className="githubIcon">
        Code on &nbsp;
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/alimadhibujar/Photo-Gallery"
        >
          <i className="fa fa-github" title="github"></i>
        </a>
      </p>
    </div>
  );
}

export default App;
