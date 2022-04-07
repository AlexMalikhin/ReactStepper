import React, {useState} from "react";
import {TextField} from "@mui/material";
import InputMask from 'react-input-mask';
import {InputsState} from "../../App";
import {InputProps} from "./types";



export const Input: React.FC<InputProps> = (props: any) => {
    const {label, value, changeValue, nameValue, inputType, regexp, errorMessage} = props
    const [isErrorText, setIsErrorText] = useState('')
    const onBlurHandle = (regexp: string, value: string) => {
        const regex = new RegExp(regexp)
        if (!regex.test(value)) {
            setIsErrorText("Введите корректные данные")
        } else {
            setIsErrorText('')
        }
    }

    return (
        <>
            {inputType == 'tel' ?
                <InputMask
                    mask={"+7(999)-999-99-99"}
                    onBlur={() => onBlurHandle(regexp, value)}
                    value={value ? value : ''}
                    onChange={(event) => changeValue(event, nameValue)}
                >
                    {(inputProps: any) =>
                        <TextField
                            {...inputProps}
                            error={!!isErrorText}
                            type={inputType}
                            sx={{mt: 3}}
                            helperText={isErrorText}
                            id="outlined-basic"
                            label={label}
                            variant="outlined"
                        />
                    }
                </InputMask>
                :
                <TextField
                    onBlur={() => onBlurHandle(regexp, value)}
                    value={value ? value : ''}
                    onChange={(event) => changeValue(event, nameValue)}
                    error={!!isErrorText}
                    type={inputType}
                    sx={{mt: 3}}
                    helperText={isErrorText}
                    id="outlined-basic"
                    label={label}
                    variant="outlined"
                />
            }
        </>
    )
}