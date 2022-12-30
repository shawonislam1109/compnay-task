import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Main from './Layout/Main';
import ErrorPage from './component/ErrorPage/ErrorPage';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import EntryData from './component/EntryData/EntryData';
import Login from './component/Login/Login'
import SignUp from './component/signUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const queryClient = new QueryClient()
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/userData',
          element: <PrivateRoute><EntryData /></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        }
      ]
    }
  ])
  return (

    <div >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route}
        ></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
