import { useState } from 'react';
import { palette } from '../pages/Index/utils/colorPalette';
import { INote } from '../pages/Index/utils/interfaces';

const noteInitialData = {
  id: new Date().getTime().toString(),
  title: 'initial title3',
  color: palette.lightPurple,
  text: 'some text into note',
};

interface IuseNotes {
  notes: INote[];
  getNoteById: (id: string) => INote;
  addNote: (newData: typeof noteInitialData) => void;
  updateNote: (id: string, title: string, color: string, text: string) => void;
  removeNote: (name: string) => void;
}

export const useNotes = (): IuseNotes => {
  const [notes, setNotes] = useState<INote[]>([noteInitialData]);

  const getNoteById = (id: string): INote => {
    const note = notes.filter((value) => value.id === id);
    return note[0];
  };

  const addNote = (newData: typeof noteInitialData): void => {
    console.log('adding note');
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

  const removeNote = (name: string): void => {
    console.log('removing note');
  };

  return { notes, getNoteById, addNote, updateNote, removeNote };
};
