import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  Box,
  Typography,
  Link
} from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Log In
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            width: { xs: '80%', sm: '400px' },
            maxWidth: '90vw',
            borderRadius: 2,
            overflow: "visible"
          }
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, textAlign: "center" }} id="customized-dialog-title" >
          Log In
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth required />
            <FormControl sx={{ m: 0 }} variant="outlined" fullWidth required>
              <InputLabel htmlFor="outlined-adornment-password" fullWidth>Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'hide the password' : 'display the password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end">
                      {showPassword ? <ilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                } label="Password" />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions style={{ paddingInline: "16px" }}>
          <Button variant="contained" autoFocus onClick={handleClose} fullWidth>Log In</Button>
        </DialogActions>

        <Typography p={"2rem"} sx={{ flexWrap: "wrap", textAlign: "center" }} variant="body2">
          Don't have an account?
          <Link component="button" variant="body2" sx={{ fontWeight: 600, marginLeft: 1 }}>
            Sign Up
          </Link>
        </Typography>
      </BootstrapDialog>
    </React.Fragment>
  );
}
