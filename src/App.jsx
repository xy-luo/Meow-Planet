import './App.css';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("HomePage");

  return (
    <div className="app">
      <Header setPage={setPage} />
      <Main page={page} />
      <Footer/>

    </div>
  );
}

export default App;
