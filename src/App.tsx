import './App.css';
import AllPages from './pages/AllPages';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';

function App() {
  return (
    <div className='h-full lg:min-h-screen dark:bg-gray-900'>
      {/* <AllPages /> */}
      <Login />
      {/* <Register /> */}
    </div>
  );
}



export default App;
