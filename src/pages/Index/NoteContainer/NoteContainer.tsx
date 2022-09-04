import React, { ReactElement, useState } from 'react';
import { useNotes } from '../../../hooks/useNotes';
import { Note } from '../Note/Note';
import { INote } from '../utils/interfaces';

export const NoteContainer = (): ReactElement => {
  const { notes, addNote, updateNote, removeNote } = useNotes();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const onOpenModal = (): void => {
    setOpenModal(true);
  };

  const onCloseModal = (): void => {
    setOpenModal(false);
  };

  return (
    <div>
      {notes.map((note: INote): ReactElement => {
        return <Note key={note.title} note={note} onOpenModal={onOpenModal} />;
      })}
    </div>
  );
};
