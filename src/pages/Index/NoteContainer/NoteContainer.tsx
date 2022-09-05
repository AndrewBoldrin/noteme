import { Modal, Box, Fade } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import { useNotes } from '../../../hooks/useNotes';
import { Note } from './Note/Note';
import { INote } from '../utils/interfaces';
import { NoteForm } from './NoteForm.tsx/NoteForm';

export const NoteContainer = (): ReactElement => {
  const { notes, getNoteById, addNote, updateNote, removeNote } = useNotes();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedNote, setSelecedtNote] = useState<INote | null>(null);

  const onOpenModal = (): void => {
    setOpenModal(true);
  };

  const onCloseModal = (): void => {
    setOpenModal(false);
  };

  const onEditing = (id: string): void => {
    onOpenModal();
    setIsEditing(true);
    setSelecedtNote(getNoteById(id));
  };

  return (
    <Box>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Fade in={openModal}>
          <Box>
            <NoteForm
              note={selectedNote}
              isEditing={isEditing}
              updateNote={updateNote}
              onCloseModal={onCloseModal}
            />
          </Box>
        </Fade>
      </Modal>

      {notes.map((note: INote): ReactElement => {
        return (
          <Note
            key={note.title}
            note={note}
            onOpenModal={onOpenModal}
            onEditing={onEditing}
          />
        );
      })}
    </Box>
  );
};
