import { useErr } from "../context/ErrContext"
import { useState } from "react";
import {
    Alert,
    AlertTitle,
    Snackbar, Box, Button
} from "@mui/material";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";

export default function ErrBanner() {

    const { err, setErr } = useErr();
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    if(!err) {
        return null;
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                    icon={<ReportProblemRoundedIcon/>}
                >
                    <AlertTitle>{err}</AlertTitle>
                </Alert>
            </Snackbar>
        </>
    );
}