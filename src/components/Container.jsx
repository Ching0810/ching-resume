import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ border:'1px solid black', width: '880px', height: '1244px' }} >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
