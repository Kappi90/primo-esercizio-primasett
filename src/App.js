import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <ImageComponent
          src='https://img.freepik.com/premium-vector/human-virtual-imagine-logo_647963-363.jpg?w=360'
          alt='loremipsum'
        />
        <ButtonComponent text='Clicca qui' />
      </div>
    </div>
  );
}

export default App;
