import './App.css';
import { ApplicationBar } from './components/AppBar/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NoteContainer } from './components/NoteContainer/NoteContainer';
import { Header } from './components/Header/Header';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#467b80',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#6e1b1b',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Header />
        </div>
        <main className='main'>
          <NoteContainer />
        </main>
        <div>
          <ApplicationBar>Footer</ApplicationBar>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
