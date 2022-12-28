import logo from './logo.svg';
import './App.css';
import { StateProvider } from './Context';
import SignUpPage from './Pages/SignUpPage'
import SignInPage from './Pages/SignInPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from './routes'
import AppRoutes from './AppRoutes';
import { useTheState } from "./Context";
import Home from './Pages/Landing';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Itinerary from './Pages/Itinerary';
import Committees from './Pages/Committees';



function App() {

 
  return (
    <div className="App">
      <StateProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="/landing" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/itinerary" element={<Itinerary/>}/>
            <Route path="/committees" element={<Committees/>}/>
            
            {/* {
              routes.map((route) => (
                <AppRoutes
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  isPrivate={route.isPrivate}
                />
              ))
            } */}
          </Routes>
        </Router>
      </StateProvider>
      
    </div>
  );
}


export default App;
