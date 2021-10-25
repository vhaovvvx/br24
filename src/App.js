import './App.css';
import DropdownGroup from './components/view/ButtonDropdownGroup/DropdownGroup';

function App() {
  return (
    <div className='App'>
      <DropdownGroup
        title='xin game'
        sizeIcon='16px'
        dataClick={[1, 2, 3, 4, 5]}
        //co tinh do hihi
      ></DropdownGroup>
    </div>
  );
}

export default App;
