import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CounterApp from './pages/CounterApp/CounterApp';
import ToDoList from './pages/ToDoList/ToDoList';
import Api from './pages/Api/Api';
import DynamicForm from './pages/DynamicForm/DynamicForm';
import DragAndDropList from './pages/Dragable/Dragable';
import ThemeChange from './pages/ThemeChange/ThemeChange';
import Theme from './pages/Theme/Theme';
import SearchPage from './pages/SearchPage/SearchPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/CounterApp' element = {<CounterApp/>}/>
        <Route path='/ToDo' element = {<ToDoList/>}/>
        <Route path='/Api'  element = {<Api/>}/>
        <Route path='/Dynamic' element={<DynamicForm/>}/>
        <Route path='/Dragable' element= {<DragAndDropList/>}/>
        <Route path='/themeChange' element={<ThemeChange/>}/>
        <Route path='/theme' element={<Theme/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
