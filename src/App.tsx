import { useReducer } from 'react';
import './App.css';
import TaskList from './state-management/TaskList';
import taskReducer from './state-management/reducers/taskReducer';

import Counter from './state-management/Counter';
import NavBar from './state-management/NavBar';
import TaskContext from './state-management/context/taskContext';



function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
      <Counter />
      <NavBar />
      <TaskList />
    </TaskContext.Provider>
  )
}

export default App;
