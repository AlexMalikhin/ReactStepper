import {InputsState} from "../../App";

export interface InputProps {
    label: string,
    value: keyof InputsState,
    changeValue: any,
    nameValue: string,
    inputType: any,
    errorMessage: string,
    regexp: string
}