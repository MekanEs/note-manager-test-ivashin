import { FC, ChangeEventHandler, useState, useEffect } from 'react';
import { Card, FormControlLabel, Checkbox, Button } from '@mui/material';
import { Note, target } from '../../store/notesSlice/types';
import { useAppDispatch } from '../../store/hooks/reduxHooks';
import { updateNote, updateNoteTags, deleteNote, addTag } from '../../store/notesSlice/notesSlice';
import { NoteCardText } from './NoteCardText';
import { NoteCardName } from './NoteCardName';
import { TagsBox } from './tagsBox';
interface NoteCardProps extends Note {
  className?: string;
}

export const NoteCard: FC<NoteCardProps> = ({ name, text, id, tags }) => {
  const [updateble, setUpdateble] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(updateNote({ id: id, value: e.target.value, target: target.NAME }));
  };

  const handleChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(updateNote({ id: id, value: e.target.value, target: target.TEXT }));
    dispatch(updateNoteTags({ id: id, value: e.target.value }));
  };

  useEffect(() => {
    dispatch(addTag());
  }, [tags, dispatch]);

  return (
    <Card
      variant='outlined'
      sx={{
        width: '200px',
        maxWidth: '200px',
        display: 'flex',
        height: '350px',
        flexDirection: 'column',
        flex: 'auto',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <NoteCardName name={name} handleChangeName={handleChangeName} id={id} updateble={updateble} />
      <NoteCardText text={text} updateble={updateble} handleChangeText={handleChangeText} id={id} />
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
      <TagsBox tags={tags} />
      <Button variant='outlined' color='error' onClick={() => dispatch(deleteNote({ id }))}>
        delete
      </Button>
    </Card>
  );
};
