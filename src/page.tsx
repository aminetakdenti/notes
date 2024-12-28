import { useContext } from "react";
import NoteContext from "./context/NoteContext";
import Note from "./Note";

export default function Page() {
  const note = useContext(NoteContext);

  return (
    <div>
      {note?.getNotes().map((ele) => <Note {...ele} id={ele.id} key={ele.id} />)}
      <input
        name="title"
        value={note?.titleNote}
        onChange={(e) => note?.setTitleNote(e.target.value)}
      />

      <input
        name="description"
        value={note?.descriptionNote}
        onChange={(e) => note?.setDescriptionNote(e.target.value)}
      />
      <button onClick={() => note?.addNote({title: note?.titleNote, description: note?.descriptionNote})} />
    </div>
  );
}
