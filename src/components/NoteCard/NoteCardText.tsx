import { ChangeEventHandler, FC, useEffect, useRef, useState } from 'react';
import { TextField, Box } from '@mui/material';
import { debounce } from 'lodash';
import { textHighlighter } from '../../helpers/textHighlighter';

interface NoteCardTextProps {
  text: string;
  handleChangeText: ChangeEventHandler<HTMLInputElement>;
  updateble: boolean;
  id: string;
}

export const NoteCardText: FC<NoteCardTextProps> = ({ text, handleChangeText, updateble, id }) => {
  const [textVal, setTextVal] = useState<string>(text);

  const debouncedTextChangeHandler = useRef(
    debounce(async (val) => {
      handleChangeText(val);
    }, 1000),
  ).current;

  const handleDebounceText: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setTextVal(event.target.value);
    debouncedTextChangeHandler(event);
  };

  useEffect(() => {
    return () => {
      debouncedTextChangeHandler.cancel();
    };
  }, [debouncedTextChangeHandler]);
  return (
    <>
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
        {textHighlighter(text)}
      </Box>
      <TextField
        sx={{
          display: !updateble ? 'none' : 'block',
        }}
        onChange={handleDebounceText}
        id={id}
        multiline
        maxRows={6}
        value={textVal}
      />
    </>
  );
};
