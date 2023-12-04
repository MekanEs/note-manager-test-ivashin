import { ChangeEventHandler, FC } from 'react';
import { TextField, CardHeader } from '@mui/material';

interface NoteCardNameProps {
  name: string;
  handleChangeName: ChangeEventHandler<HTMLInputElement>;
  updateble: boolean;
  id: string;
}

export const NoteCardName: FC<NoteCardNameProps> = ({ name, handleChangeName, updateble, id }) => {
  return (
    <>
      <CardHeader sx={{ display: updateble ? 'none' : 'block', fontSize: '24px' }} avatar={name} />
      <TextField
        sx={{
          display: !updateble ? 'none' : 'block',
        }}
        onChange={handleChangeName}
        name={name}
        id={id}
        value={name}
      />
    </>
  );
};
