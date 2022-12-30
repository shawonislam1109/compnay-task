import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Main from './Layout/Main';
import ErrorPage from './component/ErrorPage/ErrorPage';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
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
