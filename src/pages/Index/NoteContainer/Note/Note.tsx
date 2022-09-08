import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { INote } from '../../utils/interfaces';
import { Edit, ColorLens, Delete } from '@mui/icons-material';
import { palette } from '../../utils/colorPalette';

interface INoteComponent {
  note: INote;
  onOpenModal: () => void;
  onEditing: (id: string) => void;
  onRemoving: (id: string) => void;
  updateNote: (id: string, color: string, title: string, text: string) => void;
}

export const Note = ({
  note,
  onEditing,
  onRemoving,
  updateNote,
}: INoteComponent): ReactElement => {
  const { id, title, text, color } = note;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickMenuColor = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenuColor = (): void => {
    setAnchorEl(null);
  };

  const onColorChange = (colorName: string): void => {
    updateNote(id, title, colorName, text);
    handleCloseMenuColor();
  };

  return (
    <Box
      sx={{
        position: 'relative',
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
        <IconButton onClick={() => onRemoving(id)}>
          <Delete />
        </IconButton>
        <IconButton onClick={() => onEditing(id)}>
          <Edit />
        </IconButton>
        <IconButton onClick={handleClickMenuColor}>
          <ColorLens />
        </IconButton>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenuColor}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {Object.values(palette).map((colorName: string): ReactElement => {
          return (
            <MenuItem key={colorName} onClick={() => onColorChange(colorName)}>
              <Typography
                style={{
                  borderRadius: '50%',
                  backgroundColor: colorName,
                  width: '1.5rem',
                  height: '1.5rem',
                }}
              ></Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
