import { useState } from "react";
import {
  TextField,
  Box,
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  IconButton
} from "@mui/material";
import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material';

export default function Login({ onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        id="login-email"
        label="Email"
        variant="outlined"
        name="email"
        onChange={onChange}
        fullWidth
        required
      />
      <FormControl sx={{ m: 0 }} variant="outlined" fullWidth required>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password login-password"
          name="password"
          onChange={onChange}
          type={showPassword ? 'text' : 'password'}
          label="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
