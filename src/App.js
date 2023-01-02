import './App.css';
import { useState } from "react";
import Header from './components/Header';
import Search from './components/Search';
import Result from './components/Result';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="App">
      <Header />
      <Search
        setSearchTerm={setSearchTerm} />
      <Result
        searchTerm={searchTerm} />
    </div>
  );
};

export default App;
