import { useContext } from 'react';
import LoginStatus from './LoginStatus';
import TaskContext from './context/taskContext';
import useCounterStore from './counter/store';

const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const { counter } = useCounterStore()
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
