import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import Photo from './Component/Profile/ProfilePhoto.js';
function App() {
  return (
    <div className='No'>
      <div className="App">
        <Photo />
        <div className="Ni">
          <FullName />
          <Address />
        </div>
      </div>
    </div>
  );
};

export default App;
