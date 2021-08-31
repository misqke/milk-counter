import Header from './components/Header';
import Table from './components/Table';
import Orderer from './components/Orderer';
import { useState } from 'react';




function App() {
  const [counting, changeDisplay] = useState(true);
  const changeCounting = () => {
      changeDisplay(true);  
  };
  const changeOrdering = () => {
      changeDisplay(false);  
  };

  return (
    <div className="App">
      <Header countClick={changeCounting} orderClick={changeOrdering}/>
      {counting ? <Table />: <Orderer />}
    </div>
  );
}

export default App;
