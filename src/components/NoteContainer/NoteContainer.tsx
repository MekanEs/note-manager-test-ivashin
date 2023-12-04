import { FC } from 'react';
import { selectNotes } from '../../store/notesSlice/notesSlice';
import { useAppSelector } from '../../store/hooks/reduxHooks';
import { NoteCard } from '../NoteCard/NoteCard';
import { Box } from '@mui/material';

interface NoteContainerProps {}

export const NoteContainer: FC<NoteContainerProps> = () => {
  const noteList = useAppSelector((state) => selectNotes(state));
  const currentTag = useAppSelector((state) => state.notes.currentTag);

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '10px',
        gap: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {Object.values(noteList)
        .filter((el) => (currentTag.length ? el.tags.includes(currentTag) : el))
        .map((el) => (
          <NoteCard key={el.id} {...el} />
        ))}
    </Box>
  );
};
