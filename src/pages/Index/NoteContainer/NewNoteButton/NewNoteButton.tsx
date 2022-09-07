import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { ReactElement } from 'react';

interface INewNoteButton {
  onOpenModal: () => void;
}

export const NewNoteButton = ({
  onOpenModal,
}: INewNoteButton): ReactElement => {
  return (
    <Button onClick={onOpenModal}>
      <Add />
      New note
    </Button>
  );
};
