import { createContext, ReactNode, useState } from "react";
import { TNote } from "../types";

interface TContext {
  addNote: (note: Omit<TNote, "id">) => void;
  removeNote: (id: number) => void;
  updateNote: (id: number, note: Partial<Omit<TNote, "id">>) => void;
  getNote: (id: number) => TNote | undefined;
  getNotes: () => TNote[];
  titleNote: string;
  descriptionNote: string;
  setTitleNote: (title: string) => void;
  setDescriptionNote: (title: string) => void;
}

const NoteContext = createContext<null | TContext>(null);

export const NoteContextProvide = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<TNote[]>([]);
  const [titleNote, setTitleNote] = useState("");
  const [descriptionNote, setDescriptionNote] = useState("");

  const addNote = (note: Omit<TNote, "id">) => {
    setNotes((prev) => [...prev, { ...note, id: notes.length + 1 }]);
    return;
  };

  const removeNote = (id: number) => {
    setNotes((prev) => prev.filter((e) => e.id !== id));
  };

  const updateNote = (id: number, note: Partial<Omit<TNote, "id">>) => {
    const updatedNotes = [...notes];
    updatedNotes[id] = { ...updatedNotes[id], ...note };
    setNotes(updatedNotes);
  };

  const getNote = (id: number) => {
    return notes[id];
  };

  const getNotes = () => {
    return notes;
  };

  const values = {
    addNote,
    removeNote,
    updateNote,
    getNote,
    getNotes,
    setDescriptionNote,
    setTitleNote,
    titleNote,
    descriptionNote,
  };

  return <NoteContext.Provider value={values}>{children}</NoteContext.Provider>;
};

export default NoteContext;
