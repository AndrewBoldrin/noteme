import { useState } from 'react';
import { palette } from '../pages/Index/utils/colorPalette';
import { INote } from '../pages/Index/utils/interfaces';

const noteInitialData = {
  title: 'initial title3',
  color: palette.lightPurple,
  text: 'some text into note',
};

interface IuseNotes {
  notes: INote[];
  addNote: (newData: typeof noteInitialData) => void;
  updateNote: (newData: typeof noteInitialData) => void;
  removeNote: (name: string) => void;
}

export const useNotes = (): IuseNotes => {
  const [notes, setNotes] = useState<INote[]>([noteInitialData]);

  const addNote = (newData: typeof noteInitialData): void => {
    console.log('adding note');
  };

  const updateNote = (newData: typeof noteInitialData): void => {
    console.log('updating note');
  };

  const removeNote = (name: string): void => {
    console.log('removing note');
  };

  return { notes, addNote, updateNote, removeNote };
};
