import React, {useState} from 'react';
import {Stepper} from "@mui/material";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import mock from './mock/index.json';

function App() {
    const [activeStep, setActiveStep] = useState(0)
    console.log(mock)
    return (
        <div className="App">
            <Box sx={{maxWidth: 400}}>
                <Stepper activeStep={activeStep}>
                    <Button
                        variant="contained"
                        sx={{mt: 1, mr: 1}}
                    >
                        hello
                    </Button>
                </Stepper>
            </Box>
        </div>
    );
}

export default App;
