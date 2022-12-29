import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ])
  return (
    <div >
      <RouterProvider router={route}
      ></RouterProvider>
    </div>
  );
}

export default App;
