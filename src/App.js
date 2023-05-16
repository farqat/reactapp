import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { MainLayout } from './components/MainLayout';

const theme = createTheme({

})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </div>
  );
}

export default App;
