import {
  Box,
  IconButton,
  Button,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { AddLinkTwoTone, Close } from '@mui/icons-material';
import React, { ReactElement, useEffect, useState } from 'react';
import { palette } from '../../utils/colorPalette';
import { INote } from '../../utils/interfaces';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface INoteFormComponent {
  note: INote | null;
  isEditing: boolean;
  addNote: (title: string, color: string, text: string) => void;
  updateNote: (id: string, title: string, color: string, text: string) => void;
  onCloseModal: () => void;
}

export const NoteForm = ({
  note,
  isEditing,
  addNote,
  updateNote,
  onCloseModal,
}: INoteFormComponent): ReactElement => {
  const [titleForm, setTitleForm] = useState<string>('');
  const [textForm, setTextForm] = useState<string>('');

  useEffect(() => {
    if (isEditing && note != null) {
      setTitleForm(note.title);
      setTextForm(note.text);
    }
  }, []);

  const onSave = (): void => {
    if (isEditing && note != null) {
      updateNote(note.id, titleForm, palette.lightPurple, textForm);
    } else addNote(titleForm, palette.lightPurple, textForm);
    onCloseModal();
  };

  return (
    <Box sx={{ ...style, backgroundColor: palette.lightPurple }}>
      <IconButton
        sx={{ display: 'block', float: 'right' }}
        onClick={onCloseModal}
      >
        <Close />
      </IconButton>
      <TextField
        fullWidth
        id="filled-hidden-label-small"
        value={titleForm}
        onChange={(e) => setTitleForm(e.target.value)}
        placeholder="title"
        variant="outlined"
        size="medium"
      />
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Add your notes here."
        minRows={40}
        value={textForm}
        onChange={(e) => setTextForm(e.target.value)}
        style={{
          width: '100%',
          marginBlock: '1rem',
          fontSize: '1rem',
          border: 'none',
          backgroundColor: palette.lightPurple,
          outline: 'none',
        }}
      />
      <Button
        sx={{
          position: 'absolute',
          right: '1rem',
          bottom: '1rem',
        }}
        variant="contained"
        onClick={onSave}
      >
        Save
      </Button>
    </Box>
  );
};
