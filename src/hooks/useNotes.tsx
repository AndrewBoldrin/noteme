import { useState } from 'react';
import { palette } from '../pages/Index/utils/colorPalette';
import { INote } from '../pages/Index/utils/interfaces';

const noteInitialData = {
  id: new Date().getTime().toString(),
  title: 'write your note title here',
  color: palette.lightPurple,
  text: 'write your note text here',
};

interface IuseNotes {
  notes: INote[];
  getNoteById: (id: string) => INote;
  addNote: (title: string, color: string, text: string) => void;
  updateNote: (id: string, title: string, color: string, text: string) => void;
  removeNote: (id: string) => void;
}

export const useNotes = (): IuseNotes => {
  const [notes, setNotes] = useState<INote[]>([noteInitialData]);

  const getNoteById = (id: string): INote => {
    const note = notes.filter((value) => value.id === id);
    return note[0];
  };

  const addNote = (title: string, color: string, text: string): void => {
    const id = new Date().getTime().toString();
    const newNote = { id, title, color, text };

    setNotes([newNote, ...notes]);
  };

  const updateNote = (
    id: string,
    title: string,
    color: string,
    text: string,
  ): void => {
    const updatedNote = { id, title, color, text };
    const updatedNotes = notes.map((note) => {
      if (note.id === id) return updatedNote;
      return note;
    });
    setNotes(updatedNotes);
  };

  const removeNote = (id: string): void => {
    if (notes.length === 1) {
      setNotes([noteInitialData]);
    } else {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }
  };

  return { notes, getNoteById, addNote, updateNote, removeNote };
};
