import React, {useState} from 'react';
import {Stepper, Box, Step, StepLabel, StepContent, Button, Typography} from "@mui/material";
import {Input} from "./components/Input/Input";
import steps from './mock/steps.json';
import mock from './mock/backend.json';
import {ModalWindow} from "./components/ModalWindow/ModalWindow";
import {getValue} from "./utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {getUserDataAction} from "./store/userReducer/userReducer";

export interface InputsState {
    firstname: string | null,
    lastname: string | null,
    age: number | null | string,
    email: string | null,
    telephone: string | number | null
}

export interface MockType {
    name: string;
    label: string;
    type: string;
    max_length?: number;
    min_length?: number;
    regex?: string;
    min?: number;
    max?: number;
    mask?: string;
}

function App() {
    const [activeStep, setActiveStep] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [inputValues, setInputValues] = useState({})
    const dispatch = useDispatch()

    const isValidInput = (regexp: any, value: any) => {
        const reg = new RegExp(regexp)
        return !reg.test(value)
    }
    const changeValue = (event: any, currentValue: any) => {
        setInputValues((prevState) => ({...prevState, [currentValue]: event.target.value}))
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handlePrev = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    const openModal = () => {
        dispatch(getUserDataAction(inputValues))
        setIsOpenModal(true)
        setActiveStep(0)
        setInputValues({})

    }
    const closeModal = () => {
        setIsOpenModal(false)
    }

    const regexpArray: any = {
        email: '^\\S+@\\S+\\.\\S+$',
        number: '^(?:1(?:00?|\\d)|[2-5]\\d|[6-9]\\d?)$',
        tel: '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{10}$',
    }

    return (
        <div className="App">
            <ModalWindow open={isOpenModal} close={closeModal}/>
            <Box sx={{maxWidth: 400, mt: 20, ml: 45}}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {mock.map((step: MockType, index) => (
                        <Step key={steps[index]?.label}>
                            <StepLabel
                                optional={
                                    index === 4 ? (
                                        <Typography variant="caption">Последний шаг</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                {/*<Typography*/}
                                {/*    sx={{display: 'flex', flexDirection: 'column'}}>{steps[index]?.description}*/}
                                {/*</Typography>*/}
                                <Input
                                    // minLength={step.min_length}
                                    // maxLength={step.max_length}
                                    errorMessage={steps[index]?.errorText}
                                    label={step?.label}
                                    value={getValue(inputValues, step?.name)}
                                    changeValue={changeValue}
                                    nameValue={step?.name}
                                    inputType={step?.type?.toLowerCase()}
                                    regexp={step?.regex ? step?.regex : regexpArray[step?.type?.toLowerCase()]}
                                />
                                <Box sx={{mb: 2}}>
                                    <div>
                                        <Button
                                            disabled={step?.regex
                                                ? isValidInput(step?.regex, getValue(inputValues, step?.name))
                                                : isValidInput(regexpArray[step.type.toLowerCase()], getValue(inputValues, step?.name))}
                                            variant="contained"
                                            onClick={index === mock.length - 1 ? openModal : handleNext}
                                            sx={{mt: 1, mr: 1}}
                                        >
                                            {index === mock.length - 1 ? 'Отправить заявку' : 'Продолжить'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handlePrev}
                                            sx={{mt: 1, mr: 1}}
                                        >
                                            Назад
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    );
}

export default App;
