import { FC } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks/reduxHooks';
import { selectTag } from '../../store/notesSlice/notesSlice';

export const Search: FC = () => {
  const allTags = useAppSelector((state) => state.notes.allTags);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        onInputChange={(_, newValue) => {
          dispatch(selectTag({ tag: newValue }));
        }}
        options={allTags}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Tags' />}
      />
    </div>
  );
};
