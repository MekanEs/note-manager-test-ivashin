import { FC, ReactNode } from 'react';
import { AppBar, Box, Typography } from '@mui/material';

interface ApplicationBarProps {
  children: ReactNode;
}

export const ApplicationBar: FC<ApplicationBarProps> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Typography variant='h6' color='inherit' component='div'>
          {children}
        </Typography>
      </AppBar>
    </Box>
  );
};
