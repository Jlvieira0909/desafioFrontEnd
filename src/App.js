import './App.css';
import { Button, Image, Space } from 'antd';
import Cards from "./Components/Cards";
import Movies from './Components/Movies';
import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';
import Table from './Components/Table'
import axios from 'axios';

function App() {
  
  return (
    <div className="App">  
      <SideBar/>
      <header className="App-header">
        <TopBar/>
        <Movies/>
        <Cards/>
        <Table/>
      </header>
      <script src="index.js"/>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    </div>
  );
  
}

export default App;
