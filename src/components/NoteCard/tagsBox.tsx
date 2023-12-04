import { FC } from 'react';
import { Box } from '@mui/material';
interface TagsBoxProps {
  tags: string[];
}

export const TagsBox: FC<TagsBoxProps> = ({ tags }) => {
  return (
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
  );
};
