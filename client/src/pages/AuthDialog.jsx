import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import { signup, login } from "../api/user"
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
  styled,
  LinearProgress
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
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const data = await signup(formData);

      if (data.success) {
        setCurrUser(data.user);
        onClose();
        showFlash("success", "Signup was Successful!");
        navigate("/");
      }
    } catch (err) {
      showFlash("error", "An account with this email already exists");
    } finally {
      setLoading(false);
    }
  }

  const handleLoginSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setLoading(true);
      const data = await login(formData);

      if (data.success) {
        setCurrUser(data.user);
        onClose();
        showFlash("success", "Login was Successful!");
      } else {
        showFlash("error", "Login was Failed! Please check your credentials.");
      }
    } catch (err) {
      showFlash("error", `Login was Failed! ${err.message}`);
    } finally {
      setLoading(false);
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
        {loading && <LinearProgress />}
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
        <form onSubmit={mode === "login" ? handleLoginSubmit : handleSignupSubmit}>
          <DialogContent>
            {mode === "login" ?
              (<Login onChange={handleChange} />) :
              (<Signup onChange={handleChange} />)}
          </DialogContent>
          <DialogActions style={{ paddingInline: "16px" }}>
            <Button variant="contained" autoFocus
              type='submit'
              fullWidth>
              {mode === "login" ? "Log In" : "Sign Up"}
            </Button>
          </DialogActions>
        </form>
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
