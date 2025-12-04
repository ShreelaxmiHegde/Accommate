import { Link } from "react-router-dom";
import { useState } from "react";
import {
    Box,
    Paper,
    Grid,
    Typography,
    TextField,
    Button,
    Stack,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Divider,
    Avatar,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export default function NewListingForm() {

    const propertyTypes = [
        { value: 'pg', label: 'PG / Shared' },
        { value: 'hostel', label: 'Hostel' },
        { value: 'studio', label: 'Studio' },
        { value: 'apartment', label: 'Apartment' },
        { value: 'house', label: 'House' },
    ];

    const facilitiesList = [
        "Wi-Fi",
        "Furnished",
        "Kitchen",
        "Laundry",
        "24/7 Water",
        "AC",
        "Private Bathroom",
    ];

    const [formData, setFormData] = useState({
        title: "",
        stateCity: "",
        nearestCampus: "",
        address: "",
        price: "",
        propertyType: "",
        shortDesc: "",
        facilities: [],
        photo: ""
    });

    let handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("listing created", formData)
    }

    return (
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "90%", mx: "auto" }}>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                    Create a new listing
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={2}>
                            <TextField
                                name="title"
                                label="Listing title"
                                placeholder="Cozy single room near campus"
                                sx={{ width: "100%" }}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                label="State, City"
                                placeholder="Eg: Karnataka, Bangalore"
                                sx={{ width: "100%" }}
                                name="stateCity"
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                label="Nearest Campus"
                                placeholder="Eg: ABC University"
                                sx={{ width: "100%" }}
                                name="nearestCampus"
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                label="Full Address"
                                placeholder="Eg: 45 MG Road, Near ABC University, Bengaluru"
                                sx={{ width: "100%" }}
                                name="address"
                                onChange={handleChange}
                                required
                            />

                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 3 }} >
                                    <TextField
                                        label="Price (per month)"
                                        placeholder="₹ 8,000"
                                        fullWidth
                                        name="price"
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 3 }}>
                                    <FormControl fullWidth>
                                        <InputLabel>Property type</InputLabel>
                                        <Select name="propertyType" label="Property type" defaultValue="pg" onChange={handleChange} required >
                                            {propertyTypes.map((type) => (
                                                <MenuItem value={type.value}>{type.label}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <TextField
                                label="Short description"
                                placeholder="What makes this place special..."
                                sx={{ width: "100%" }}
                                multiline
                                rows={3}
                                name="shortDesc"
                                onChange={handleChange}
                            />

                            <Divider />
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Facilities & Amenities</Typography>
                        <FormGroup>
                            <Grid container spacing={1}>
                                {facilitiesList.map((facility) => (
                                    <Grid size={{ xs: 6, sm: 4 }} key={facility}>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label={facility}
                                            name="facilities"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </FormGroup>

                        <Divider sx={{ mt: 2, mb: 3 }} />

                        <Stack spacing={2}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Photos</Typography>

                            <Paper variant="outlined" sx={{ p: 2, display: "flex", gap: 2, flexDirection: "column" }}>
                                <Avatar variant="rounded" sx={{ width: 72, height: 72 }}>
                                    <InsertPhotoIcon sx={{ width: 65, height: 65 }} />
                                </Avatar>

                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    name="photo"
                                    onChange={handleChange}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button startIcon={<PhotoCamera />} component="span" variant="outlined">
                                        Upload a photo
                                    </Button>
                                </label>

                                <Typography variant="caption" color="text.secondary">Pro tip: upload a clear cover photo + interior shot</Typography>
                            </Paper>

                            <Divider />
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 1 }}>
                    <Button variant="contained" onClick={handleSubmit}>Create listing</Button>
                    <Button variant="outlined" component={Link} to="/explore">Cancel</Button>
                </Box>
            </Paper>
        </Box>
    );
}
