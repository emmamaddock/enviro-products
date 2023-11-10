import './App.css';
import Search from './Search';
import Sort from './Sort';
import Table from './Table';
import { useState } from 'react';

const enviroObjects = [
  { name: "Lithium Battery", impact: 5},
  { name: "Plastic Container", impact: 5},
  { name: "Bamboo Toothbrush", impact: 2},
  { name: "Food Waste", impact: 1},
  { name: "Bamboo Toothbrush", impact: 2},
];

function App() {
  const [tableData, setTableData] = useState(enviroObjects);
  const [searchText, setSearchText] = useState('');

  const handleSorting = (order) => {
    var sorted = [];
    if (order === "asc") {
      sorted = [...tableData].sort((a, b) =>  (a.impact - b.impact));
    } else {
      sorted = [...tableData].sort((a, b) =>  (b.impact - a.impact));
    }
    setTableData(sorted);
  }

  const handleSearching = (searchText) => {
    var results = tableData.filter(d => {
      if (searchText === "") return d;
      return d.name.toLowerCase().includes(searchText.toLowerCase());
    })
    setSearchText(searchText);
    setTableData(results);
  }
  
  return (
    <div className='App-container'>
      <div className="Banner">
        <h1>Cano Environmental Product Ratings</h1>
        <p>Each product in the table below is rated from 1-5 for their environmental impact; 1 being very low negative impact on the environment and 5 being very high negative impact on the environment.</p>
      </div>
      <div className="Data-container">
        <>
          <div className="Data-manipulation">
            <Sort handleSorting={handleSorting}/>
            <Search searchText={searchText} handleSearching={handleSearching}/>
          </div>
          <Table tableData={tableData}/>
          </>
      </div>
    </div>
  );
}

export default App;