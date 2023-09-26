import './App.css';
import Counter from './Counter'
import Course from './Course'
import Login from './Login'
import ComponentA from './ComponentA'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApiCallInClass from './ApiCallInClass';
import ApiCallinFunctinon from './ApiCallinFunctinon';
import TableInData from './TableInData';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<ComponentA />} />
          <Route exact path='/course/:id' element={< Course />} />
          <Route exact path='/login' element={< Login />} />
          <Route exact path='/counter' element={< Counter />} />
          <Route exact path="/api" element={<ApiCallInClass />} />
          <Route exact path="/apis" element={<ApiCallinFunctinon />} />
          <Route exact path="/table" element={<TableInData />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
