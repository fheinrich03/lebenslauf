import { Button, Container, CssBaseline, ThemeProvider, createTheme, ButtonGroup } from '@mui/material';
import { usePDF } from 'react-to-pdf';
import Resume from './components/Resume';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function AppContent() {
  const { toPDF, targetRef } = usePDF({
    filename: 'lebenslauf.pdf',
    page: { format: 'a4', orientation: 'portrait' }
  });
  const { language, setLanguage, resumeData } = useLanguage();

  return (
    <Container sx={{ py: 4 }}>
      <ButtonGroup sx={{ mb: 2, mr: 2 }}>
        <Button
          variant={language === 'de' ? 'contained' : 'outlined'}
          onClick={() => setLanguage('de')}
        >
          DE
        </Button>
        <Button
          variant={language === 'en' ? 'contained' : 'outlined'}
          onClick={() => setLanguage('en')}
        >
          EN
        </Button>
      </ButtonGroup>
      <Button
        variant="contained"
        onClick={() => toPDF()}
        sx={{ mb: 2 }}
      >
        {language === 'de' ? 'Als PDF herunterladen' : 'Download as PDF'}
      </Button>
      <div ref={targetRef}>
        <Resume data={resumeData} />
      </div>
    </Container>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
