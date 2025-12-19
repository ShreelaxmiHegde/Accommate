import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { editListing } from "../../api/listing.js";
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
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useFlash } from "../../context/FlashContext.jsx";
import CircularLoader from "../loaders/CircularLoader.jsx";

export default function EditListingForm() {
    const [loading, setLoading] = useState(false);
    const { showFlash } = useFlash();
    const [imgPreview, setImgPreview] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const listing = location.state.listing;

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

    useEffect(() => {
        if (listing) {
            setFormData({
                title: listing.title,
                stateCity: listing.stateCity,
                nearestCampus: listing.nearestCampus,
                address: listing.address,
                price: listing.price,
                propertyType: listing.propertyType,
                capacity: listing.capacity,
                desc: listing.desc,
                facilities: listing.facilities || [],
                image: listing.image || ""
            })
        }
    }, [listing])

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
            setFormData((prev) => ({
                ...prev,
                [name]: file
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();

        const fd = new FormData();
        for (let key in formData) {
            if (key === "image" instanceof File) {
                fd.append("image", formData.image); //append file separately
            } else if (key === "facilities") {
                formData.facilities.forEach((facility) =>
                    fd.append("listing[facilities][]", facility)
                );
            } else {
                fd.append(`listing[${key}]`, formData[key]);
            }
        }

        console.log(fd);
        try {
            setLoading(true);
            let data = await editListing(listing._id, fd);
            console.log(data);
            if (data.success) {
                showFlash("success", "Listing Updated Successfully!");
                navigate(`/explore/listings/${listing._id}`);
            }
        } catch (err) {
            console.error("Error editing listing:", err.message);
            showFlash("error", `${err.message}! Listing updation Failed.`);
        } finally {
            setLoading(false);
        }
    }

    if(loading) {
        return <CircularLoader msg={"Updating your listing..."} />
    }

    return (
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "90%", mx: "auto" }}>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                    Edit Listing
                </Typography>
                <form onSubmit={handleSubmit} >
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={2}>
                                <TextField
                                    name="title"
                                    label="Listing title"
                                    value={formData.title}
                                    sx={{ width: "100%" }}
                                    onChange={handleChange}
                                    slotProps={{
                                        htmlInput: {
                                            minLength: 3,
                                            maxLength: 50
                                        }
                                    }}
                                    required
                                />
                                <TextField
                                    label="State, City"
                                    value={formData.stateCity}
                                    sx={{ width: "100%" }}
                                    name="stateCity"
                                    onChange={handleChange}
                                    slotProps={{
                                        htmlInput: {
                                            minLength: 3,
                                            maxLength: 50
                                        }
                                    }}
                                    required
                                />
                                <TextField
                                    label="Nearest Campus"
                                    value={formData.nearestCampus}
                                    sx={{ width: "100%" }}
                                    name="nearestCampus"
                                    onChange={handleChange}
                                    slotProps={{
                                        htmlInput: {
                                            minLength: 3,
                                            maxLength: 50
                                        }
                                    }}
                                    required
                                />
                                <TextField
                                    label="Full Address"
                                    value={formData.address}
                                    sx={{ width: "100%" }}
                                    name="address"
                                    onChange={handleChange}
                                    slotProps={{
                                        htmlInput: {
                                            minLength: 3,
                                            maxLength: 200
                                        }
                                    }}
                                    required
                                />

                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 3 }} >
                                        <TextField
                                            type="number"
                                            label="Price (/month)"
                                            value={formData.price}
                                            fullWidth
                                            name="price"
                                            onChange={handleChange}
                                            slotProps={{
                                                htmlInput: {
                                                    min: 0
                                                }
                                            }}
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
                                            value={formData.capacity}
                                            fullWidth
                                            name="capacity"
                                            onChange={handleChange}
                                            slotProps={{
                                                htmlInput: {
                                                    min: 1,
                                                    max: 50
                                                }
                                            }}
                                            required
                                        />
                                    </Grid>
                                </Grid>

                                <TextField
                                    label="Short description"
                                    value={formData.desc}
                                    sx={{ width: "100%" }}
                                    multiline
                                    name="desc"
                                    onChange={handleChange}
                                    slotProps={{
                                        htmlInput: {
                                            minLength: 3,
                                            maxLength: 500
                                        }
                                    }}
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
                                                    checked={formData.facilities.includes(facility)}
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
                                        <img
                                            src={formData.image.url}
                                            alt="selected listing"
                                            style={{ height: "200px" }}
                                        />
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
                                            Upload another photo
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
                        <Button type="submit" variant="contained">Submit</Button>
                        <Button variant="outlined" component={Link} to="/explore">Cancel</Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}
