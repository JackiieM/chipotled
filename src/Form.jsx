import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, InputAdornment, Button,
        Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material"
import { Container, Stack } from "@mui/system"
import { useState } from "react"
import { chipotled, change } from "./logic"


const Form = () => {
    const [areaV, setAreaV] = useState("Maryland");
    const [itemV, setItemV] = useState("");
    const [itemPrice, setItemPrice] = useState(0)
    const [proteinV, setProteinV] = useState("")
    const [guac, setGuac] = useState(0)
    const [amount, setAmount] = useState();
    const [open, setOpen] = useState(false)

    const handleChange = (event, state) => {
        const value = event.target.value;
        console.log(value)
        state(value)
    }

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleDialogOpen = () => {
        setOpen(true)
    }

    const handleDialogClose = () => {
        setOpen(false)
    }
    const handleItemValue = (item, state) => {
        if(item === "chicken" || item === "sofritas" || item === "vegetarian") {
            state(8.19)
        } else if (item === "steak" || item === "BBQ") {
            state(9.45)
        } else {
            state(8.76)
        }
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
                            <MenuItem value={"Maryland"}>Maryland</MenuItem>
                        </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="item">Item</InputLabel>
                        <Select
                        labelId="item"
                        label="Item"
                        value={itemV}
                        onChange={(e) => handleChange(e, setItemV)}>
                            <MenuItem value={"burrito"}>Burrito</MenuItem>
                            <MenuItem value={"bowl"}>Bowl</MenuItem>
                        </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="area">Protein</InputLabel>
                        <Select
                        labelId="area"
                        label="Area"
                        value={proteinV}
                        onChange={(e) => {handleChange(e, setProteinV);
                                            handleItemValue(itemV, setItemPrice)}}>
                            <MenuItem value={"chicken"}>Chicken</MenuItem>
                            <MenuItem value={"steak"}>Steak</MenuItem>
                            <MenuItem value={"carnitas"}>Carnitas</MenuItem>
                            <MenuItem value={"BBQ"}>BBQ</MenuItem>
                            <MenuItem value={"sofritas"}>Sofritas</MenuItem>
                            <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
                        </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="extra">Extras</InputLabel>
                        <Select
                        labelId="extra"
                        label="Extra"
                        value={guac}
                        onChange={(e) => handleChange(e, setGuac)}>
                            <MenuItem value={2.46}>Add guacamole</MenuItem>
                            <MenuItem value={0}>No guacamole</MenuItem>
                        </Select>
                </FormControl>
                <InputLabel id="money">Amount to Spend:</InputLabel>
                <TextField required 
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    inputMode: 'numeric', 
                    pattern: '[0-9]*'
            }}
            onChange={(e) => handleAmount(e)}> 
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
                                    <DialogContentText>{guac > 0 ? `With $ ${amount}, you can buy ${chipotled(amount, itemPrice, guac)} ${proteinV} chipotle ${itemV +"s"} with guacamole in the state of ${areaV}.
                                                        That's a whole lot of beans.` : `With $ ${amount}, you can buy ${chipotled(amount, itemPrice)} ${proteinV} chipotle ${itemV +"s"} without guacamole in the state of ${areaV}.
                                                        That's a whole lot of beans.`}</DialogContentText>
                                </DialogContent>
                        </Dialog>
                </Container>
            </Container>
        </div>
    )
}

export default Form