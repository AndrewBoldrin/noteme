import { Box, IconButton, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { INote } from '../../utils/interfaces';
import { Edit, Add, ColorLens } from '@mui/icons-material';

interface INoteComponent {
  note: INote;
  onOpenModal: () => void;
  onEditing: (id: string) => void;
}

export const Note = ({
  note,
  onOpenModal,
  onEditing,
}: INoteComponent): ReactElement => {
  const { id, title, text, color } = note;
  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '15rem',
        minHeight: '15rem',
        backgroundColor: color,
        paddingInline: '2rem',
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{ textAlign: 'center', paddingBlock: '1rem' }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        sx={{ pt: '.5rem', pb: '3rem' }}
      >
        {text}
      </Typography>
      <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
        <IconButton onClick={onOpenModal}>
          <Add />
        </IconButton>
        <IconButton onClick={() => onEditing(id)}>
          <Edit />
        </IconButton>
        <IconButton>
          <ColorLens />
        </IconButton>
      </Box>
    </Box>
  );
};
