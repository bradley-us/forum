import './App.css';
import Home from './pages/Home/Home';
// import DarKModeSwitcher from './app_components/nav/toggleDarkMode/DarkModeSwitcher';

function App() {
  return (
    <div className='lg:container mx-auto'>
      <Home />

      {/* <div className='bg-white dark:bg-gray-800 min-h-screen flex flex-col items-center transition duration 200'>
        <DarKModeSwitcher />
        <h1 className='dark:text-white'>Hola, bienvenido a Light y Darkmode!</h1>
      </div> */}
    </div>
  );
}



export default App;
