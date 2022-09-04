import React, { ReactElement, useState } from 'react';
import { NoteInputFilter } from '../Index/NoteInputFilter/NoteInputFilter';
import { NoteContainer } from './NoteContainer/NoteContainer';

export const Index = (): ReactElement => {
  const [filterText, setFilterText] = useState<string>('');

  const onInputChange = (text: string): void => {
    setFilterText(text);
  };

  return (
    <>
      <NoteInputFilter filterText={filterText} onInputChange={onInputChange} />
      <NoteContainer />
    </>
  );
};
