import { FC, ChangeEventHandler, useState, useEffect } from 'react';
import {
  Card,
  TextField,
  CardHeader,
  CardContent,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { Note, target } from '../../store/notesSlice/types';
import { useAppDispatch } from '../../store/hooks/reduxHooks';
import { updateNote, updateNoteTags, deleteNote, addTag } from '../../store/notesSlice/notesSlice';
interface NoteCardProps extends Note {
  className?: string;
}

export const NoteCard: FC<NoteCardProps> = ({ name, text, id, tags }) => {
  const [updateble, setUpdateble] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const handleChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(updateNote({ id: id, value: e.target.value, target: target.TEXT }));
    dispatch(updateNoteTags({ id: id, value: e.target.value }));
  };

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(updateNote({ id: id, value: e.target.value, target: target.NAME }));
  };

  useEffect(() => {
    dispatch(addTag({ tags }));
  }, [tags, dispatch]);

  return (
    <Card variant='outlined' sx={{ width: '200px', display: 'flex', maxHeight: '500px' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 'auto' }}>
        <CardHeader
          sx={{ display: updateble ? 'none' : 'block', fontSize: '24px' }}
          avatar={name}
        />
        <TextField
          sx={{
            display: !updateble ? 'none' : 'block',
          }}
          onChange={handleChangeName}
          name={name}
          id={id}
          value={name}
        />
        <Box
          sx={{
            display: updateble ? 'none' : 'block',
            wordWrap: 'break-word',
            maxHeight: '160px',
            overflowY: 'auto',
            flex: 'auto',
            width: '170px',
          }}
        >
          {text.split(' ').map((el) => {
            if (el.startsWith('#')) {
              return (
                <span key={el}>
                  <span className='tag'>{el}</span>{' '}
                </span>
              );
            } else {
              return <span key={el}>{el + ' '}</span>;
            }
          })}
        </Box>

        <TextField
          sx={{
            display: !updateble ? 'none' : 'block',
          }}
          onChange={handleChangeText}
          name={name}
          id={id}
          multiline
          maxRows={6}
          value={text}
        />
        <FormControlLabel
          control={
            <Checkbox
              name='updateble'
              onChange={() => setUpdateble((prev) => !prev)}
              value={updateble}
            />
          }
          label='updateble'
        />
        <Box
          sx={{
            display: 'flex',
            gap: '5px',
            overflowX: 'auto',
            overflowY: 'hidden',

            width: '150px',
            padding: '10px',
          }}
        >
          {tags.map((el) => (
            <span key={el} className='tag'>
              {el}
            </span>
          ))}
        </Box>
        <Button variant='outlined' color='secondary' onClick={() => dispatch(deleteNote({ id }))}>
          delete
        </Button>
      </CardContent>
    </Card>
  );
};
