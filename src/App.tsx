import { ApplicationBar } from './components/AppBar/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import { NoteContainer } from './components/NoteContainer/NoteContainer';
import { Header } from './components/Header/Header';
import { theme } from './theme/MUITheme';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main className='main'>
          <NoteContainer />
        </main>
        <footer>
          <ApplicationBar>
            <span>Author: Mekan Esenjanow</span> <span>2023</span>
          </ApplicationBar>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;
