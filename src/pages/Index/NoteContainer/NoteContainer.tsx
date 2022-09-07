import { Modal, Box, Fade, Grid } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import { useNotes } from '../../../hooks/useNotes';
import { Note } from './Note/Note';
import { INote } from '../utils/interfaces';
import { NoteForm } from './NoteForm.tsx/NoteForm';
import { NewNoteButton } from './NewNoteButton/NewNoteButton';

export const NoteContainer = (): ReactElement => {
  const { notes, getNoteById, addNote, updateNote, removeNote } = useNotes();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedNote, setSelecedtNote] = useState<INote | null>(null);

  const onOpenModal = (): void => {
    setOpenModal(true);
  };

  const onCloseModal = (): void => {
    setIsEditing(false);
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
              addNote={addNote}
              updateNote={updateNote}
              onCloseModal={onCloseModal}
            />
          </Box>
        </Fade>
      </Modal>

      <NewNoteButton onOpenModal={onOpenModal} />

      <Grid container spacing={2} sx={{ mt: 2, borderTop: '1px solid #ccc' }}>
        {notes.map((note: INote): ReactElement => {
          return (
            <Grid item xs={12} sm={4} md={3} lg={2.4} key={note.id}>
              <Note
                note={note}
                onOpenModal={onOpenModal}
                onEditing={onEditing}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
