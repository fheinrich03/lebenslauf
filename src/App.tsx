import React, { useRef } from 'react';
import { Button, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { usePDF } from 'react-to-pdf';
import Resume from './components/Resume';
import { ResumeData } from './types/index';
import { resumeData } from './content';

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

function App() {
  const { toPDF, targetRef } = usePDF({
    filename: 'lebenslauf.pdf',
    page: { format: 'a4', orientation: 'portrait' }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: 4 }}>
        <Button
          variant="contained"
          onClick={() => toPDF()}
          sx={{ mb: 2 }}
        >
          Als PDF herunterladen
        </Button>
        <div ref={targetRef}>
          <Resume data={resumeData} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
