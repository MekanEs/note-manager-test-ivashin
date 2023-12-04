import { FC } from 'react';
import { ApplicationBar } from '../AppBar/AppBar';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../store/hooks/reduxHooks';
import { addNewNote } from '../../store/notesSlice/notesSlice';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const addNote = () => dispatch(addNewNote());
  return (
    <div>
      <ApplicationBar>
        <header className='header'>
          <span>Note Manager</span>
          <Button color='success' onClick={addNote} variant='outlined'>
            add note
          </Button>
        </header>
      </ApplicationBar>
    </div>
  );
};
