import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./pages/Home";
import DetailPage from './pages/Detail';
import './App.css';



function App() {


  const router = createBrowserRouter([
    {
    path:"",
    element:<HomePage/>
    },{
      path:"/details/:nome",
      element:<DetailPage/>
    }

  ])
  return (
    <div >

      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
