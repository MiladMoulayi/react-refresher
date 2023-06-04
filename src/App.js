import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Solidify React' />
      <Todo text='Learn NextJS' />
      <Todo text='Get Awesome' />
    </div>
  );
}

export default App;
