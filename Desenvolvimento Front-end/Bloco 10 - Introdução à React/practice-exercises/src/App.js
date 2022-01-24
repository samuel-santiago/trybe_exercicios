import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const TasksArray = ['Acordar', 'Escovar os dentes', 'Comer', 'Estudar', 'dormir' ]

function App() {
  return (
    <ul>{TasksArray.map((element) => Task(element))}</ul>
  );
}

export default App;
