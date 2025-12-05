import { Link, useNavigate } from "react-router-dom";
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
import api from "../../api/axios.js"
import { useFlash } from "../../context/FlashContext.jsx";

export default function NewListingForm() {
    const { showFlash } = useFlash();
    const [imgPreview, setImgPreview] = useState("");
    const navigate = useNavigate();

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
        price: 0,
        propertyType: "",
        capacity: 0,
        desc: "",
        facilities: [],
        image: ""
    });

    let handleChange = (evt) => {
        const { name, value, checked, files } = evt.target;
        if (name === "facilities") {
            setFormData((prev) => {
                if (checked) { //add checked facility to the arr
                    return {
                        ...prev,
                        facilities: [...prev.facilities, value]
                    }
                } else { //remove unchecked facility from the arr
                    return {
                        ...prev,
                        facilities: prev.facilities.filter(
                            (facility) => facility !== value)
                    }
                }
            });
        } else if (files && files[0]) {
            const file = files[0];
            setImgPreview(URL.createObjectURL(file));
            setFormData({
                ...formData,
                [name]: file
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();

        const fd = new FormData();
        for (let key in formData) {
            if (key === "image") {
                fd.append("image", formData.image); //append file separately
            } else if (key === "facilities") {
                formData.facilities.forEach((facility) =>
                    fd.append("listing[facilities][]", facility)
                );
            } else {
                fd.append(`listing[${key}]`, formData[key]);
            }
        }

        try {
            let res = await api.post("/listings", fd);
            if (res.data.success) {
                showFlash("success", "Listing Created Successfully!");
                navigate(`explore/${res.data.url}`);
            }
        } catch (err) {
            console.error("Error creating listing:", err);
            showFlash("error", `${err.message}! Listing creation Failed.`);
        }
    }

    return (
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "90%", mx: "auto" }}>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                    Create a new listing
                </Typography>
                <form onSubmit={handleSubmit} >
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
                                            type="number"
                                            label="Price (/month)"
                                            placeholder="₹ 8000"
                                            fullWidth
                                            name="price"
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 3 }}>
                                        <FormControl fullWidth>
                                            <InputLabel required>Property type</InputLabel>
                                            <Select name="propertyType" label="Property type" value={formData.propertyType} onChange={handleChange} required >
                                                {propertyTypes.map((type) => (
                                                    <MenuItem value={type.value}>{type.label}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 3 }} >
                                        <TextField
                                            type="number"
                                            label="Capacity"
                                            placeholder="Eg: 4"
                                            fullWidth
                                            name="capacity"
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                </Grid>

                                <TextField
                                    label="Short description"
                                    placeholder="What makes this place special..."
                                    sx={{ width: "100%" }}
                                    multiline
                                    rows={3}
                                    name="desc"
                                    onChange={handleChange}
                                    required
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
                                                label={facility}
                                                control={<Checkbox
                                                    name="facilities"
                                                    value={facility}
                                                    onChange={handleChange}
                                                />}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </FormGroup>

                            <Divider sx={{ mt: 2, mb: 3 }} />

                            <Stack spacing={2}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Photos</Typography>

                                <Paper variant="outlined" sx={{ p: 2, display: "flex", gap: 2, flexDirection: "column" }}>
                                    {!imgPreview && (
                                        <Avatar variant="rounded" sx={{ width: 72, height: 72 }}>
                                            <InsertPhotoIcon sx={{ width: 65, height: 65 }} />
                                        </Avatar>
                                    )}

                                    {imgPreview && (
                                        <img
                                            src={imgPreview}
                                            alt="selected listing"
                                            style={{ height: "200px" }}
                                        />
                                    )}

                                    <input
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="contained-button-file"
                                        type="file"
                                        name="image"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button startIcon={<PhotoCamera />} component="span" variant="outlined">
                                            Upload a photo
                                        </Button>
                                    </label>

                                    <Typography variant="caption" color="text.secondary">
                                        Pro tip: upload a clear cover photo + interior shot
                                    </Typography>
                                </Paper>

                                <Divider />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 1 }}>
                        <Button type="submit" variant="contained">Create listing</Button>
                        <Button variant="outlined" component={Link} to="/explore">Cancel</Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}
