import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, InputAdornment, Button,
        Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material"
import { Container, Stack } from "@mui/system"
import { useState } from "react"


const Form = () => {
    const [areaV, setAreaV] = useState("");
    const [itemV, setItemV] = useState("");
    const [proteinV, setProteinV] = useState("")
    const [open, setOpen] = useState(false)

    const handleChange = (event, state) => {
        const value = event.target.value;
        state(value)
    }

    const handleDialogOpen = () => {
        setOpen(true)
    }

    const handleDialogClose = () => {
        setOpen(false)
    }


    return (
        <div>
            <Container>
                <h1>Chipotle It!</h1>
                <Stack spacing={3}>
                <FormControl fullWidth>
                    <InputLabel id="area">State</InputLabel>
                        <Select
                        labelId="area"
                        label="Area"
                        value={areaV}
                        onChange={(e) => handleChange(e, setAreaV)}>
                            <MenuItem value={"MA"}>Maryland</MenuItem>
                        </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="area">Item</InputLabel>
                        <Select
                        labelId="area"
                        label="Area"
                        value={itemV}
                        onChange={(e) => handleChange(e, setItemV)}>
                            <MenuItem value={"BURRITO"}>Burrito</MenuItem>
                            <MenuItem value={"BOWL"}>Bowl</MenuItem>
                        </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="area">Protein</InputLabel>
                        <Select
                        labelId="area"
                        label="Area"
                        value={proteinV}
                        onChange={(e) => handleChange(e, setProteinV)}>
                            <MenuItem value={"CHICKEN"}>Chicken</MenuItem>
                            <MenuItem value={"STEAK"}>Steak</MenuItem>
                            <MenuItem value={"CARNITAS"}>Carnitas</MenuItem>
                            <MenuItem value={"BBQ"}>BBQ</MenuItem>
                            <MenuItem value={"SOFRITAS"}>Sofritas</MenuItem>
                            <MenuItem value={"VEG"}>Vegetarian</MenuItem>
                        </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Add guacamole?</FormLabel>
                    <RadioGroup defaultValue="no guac">
                        <FormControlLabel value="no guac" control={<Radio/>} label="No" color="warning"/>
                        <FormControlLabel value="guac" control={<Radio/>} label="Yes" color="success"/>
                    </RadioGroup>
                </FormControl>
                <InputLabel id="money">Amount to Spend:</InputLabel>
                <TextField required 
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    inputMode: 'numeric', 
                    pattern: '[0-9]*'
            }}> 
                </TextField>
                <Button 
                variant="contained" 
                onClick={handleDialogOpen}>Chipotle'd!</Button>
                </Stack>
                    <Container>
                        <Dialog
                        open={open}
                        onClose={handleDialogClose}
                        >
                            <DialogTitle>{"Hi"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>hi x2</DialogContentText>
                                </DialogContent>
                        </Dialog>
                </Container>
            </Container>
        </div>
    )
}

export default Form