import { useEffect, useState } from 'react';
import {
  Snackbar,
  Alert
} from '@mui/material';

export default function FlashMsg({ flash, setFlash }) {
  const [open, setOpen] = useState(false);

  const handleClose = (evt, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (flash) {
      setOpen(true);
    }
  }, [flash]);

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={flash?.type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {flash?.msg} 
        </Alert>
      </Snackbar>
    </div>
  );
}