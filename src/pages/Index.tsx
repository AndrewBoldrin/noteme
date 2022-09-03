import React, { ReactElement, useState } from 'react';
import { NoteInputFilter } from './NoteInputFilter/NoteInputFilter';

export const Index = (): ReactElement => {
  const [filterText, setFilterText] = useState<string>('');

  const onInputChange = (text: string): void => {
    setFilterText(text);
  };

  return (
    <>
      <NoteInputFilter filterText={filterText} onInputChange={onInputChange} />
    </>
  );
};
