import "./App.css";
import { NoteContextProvide } from "./context/NoteContext";
import Page from "./page";

function App() {
  return (
    <NoteContextProvide>
      <Page />
    </NoteContextProvide>
  );
}

export default App;
