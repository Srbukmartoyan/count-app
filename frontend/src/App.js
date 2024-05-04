import './App.css';
import { List, HeaderCounter, Controls } from "./components"
function App() {
  return (
    <div className="app-container">
        <HeaderCounter />
        <Controls />
        <List />
    </div>
  );
}

export default App;
