import { Box, TextField } from '@mui/material';
import React, { ReactElement } from 'react';

interface NoteInputFilterType {
  filterText: string;
  onInputChange: (text: string) => void;
}

export const NoteInputFilter = ({
  filterText,
  onInputChange,
}: NoteInputFilterType): ReactElement => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '50rem',
        margin: '5rem auto',
      }}
    >
      <TextField
        id="outlined-basic"
        label="Filter your notes"
        variant="outlined"
        color="secondary"
        value={filterText}
        onChange={(e) => onInputChange(e.target.value)}
        fullWidth
      />
    </Box>
  );
};
