import './App.css';
import AllPages from './pages/AllPages';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';

function App() {
  return (
    <div className='h-full dark:bg-gray-900'>
      <div className='h-full dark:bg-gray-900 dark:text-gray-300'>
        <AllPages />
        {/* <Login /> */}
        {/* <Register /> */}
      </div>
    </div>
    
  );
}



export default App;
