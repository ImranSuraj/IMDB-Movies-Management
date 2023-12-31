import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Header from "./Components/Header";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Movie from "./Components/Movie"
import Error from "./Components/Error";
import Favourite from "./Components/Favourite"
function App() {
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/search/:title" element={ <Search/>}/>
      <Route path="/movie/:id" element={ <Movie/>}/>
      <Route path="/Favourite" element={ <Favourite/>}/>
      <Route path="/*" element={ <Error/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
