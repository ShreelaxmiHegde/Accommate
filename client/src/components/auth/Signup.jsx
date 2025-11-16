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
import Visibility from '@mui/icons-material/Visibility';

export default function Signup() {
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
            <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth required />
            <TextField id="outlined-basic" type="email" label="Email" variant="outlined" fullWidth required />
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
    );
}
