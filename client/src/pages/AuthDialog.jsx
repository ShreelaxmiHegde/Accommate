import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import {
  useState,
  useEffect
} from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Link,
  styled
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';
import { useAuth } from '../context/AuthContext';
import { useFlash } from '../context/FlashContext';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function AuthDialog({ open, initialMode, onClose }) {
  const [mode, setMode] = useState(initialMode);
  const { setCurrUser } = useAuth();
  const navigate = useNavigate();
  const { showFlash } = useFlash(); 

  useEffect(() => {
    if (open) {
      setMode(initialMode);
    }
  }, [open, initialMode]);

  let [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  let handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSignupSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const res = await api.post("/signup", formData);
      if (res.data.success) {
        setCurrUser(res.data.user);
        onClose();
        showFlash("success", "Signup was Successful!");
        navigate("/");
      }
    } catch (err) {
      console.error("Error :", err.message);
      showFlash("error", `Signup was Failed! ${err.message}`);
    }
  }

  const handleLoginSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const res = await api.post("/login", formData);
      console.log("Login Response:", res.data);
      if (res.data.success) {
        setCurrUser(res.data.user);
        onClose();
        showFlash("success", "Login was Successful!");
      } else {
        showFlash("error", "Login was Failed! Please check your credentials.");
      }
    } catch (err) {
      console.error("Error :", err.message);
      console.error("Error Log:", err)
      showFlash("error", `Login was Failed! ${err.message}`);
    }
  }
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '80%', sm: '400px' },
              maxWidth: '90vw',
              borderRadius: 2,
              overflow: "visible"
            }
          }
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, textAlign: "center" }} id="customized-dialog-title" >
          {mode === "login" ? "Log In" : "Sign Up"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
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
          {mode === "login" ?
            (<Login onChange={handleChange} />) :
            (<Signup onChange={handleChange} />)}
        </DialogContent>
        <DialogActions style={{ paddingInline: "16px" }}>
          <Button variant="contained" autoFocus
            onClick={mode == "login" ? handleLoginSubmit : handleSignupSubmit}
            fullWidth>
            {mode === "login" ? "Log In" : "Sign Up"}
          </Button>
        </DialogActions>

        <Typography p={"2rem"} sx={{ flexWrap: "wrap", textAlign: "center" }} variant="body2">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}
          <Link
            component="button"
            variant="body2"
            sx={{ fontWeight: 600, marginLeft: 1 }}
            onClick={() => setMode(mode === "login" ? "signup" : "login")}>
            {mode === "login" ? "Sign Up" : "Log In"}
          </Link>
        </Typography>
      </BootstrapDialog>
    </React.Fragment>
  );
}
