import {TextField} from "@mui/material";
import React from "react";
import {InputsState} from "../../App";

interface InputProps{
    label: string,
    value:  keyof InputsState,
    changeValue: any,
    nameValue: string,
    inputType: any,
    errorState: boolean
}

export const Input: React.FC<InputProps> = ({label, value, changeValue, nameValue, inputType, errorState}) =>{
    return(
        <TextField
            error={errorState}
            type={inputType}
            sx={{mt:3}}
            helperText={'ddd'}
            // InputProps={{inputProps:{maxLength: 3 }}}
            onChange={(event)=>changeValue(event, nameValue)}
            onBlur={()=>console.log()}
            value={value ? value : ''}
            id="outlined-basic"
            label={label}
            variant="outlined"
        />
    )
}