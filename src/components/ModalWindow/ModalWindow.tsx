import modalWindowStyles from './ModalWindow.module.css';
import {Box, Modal, Typography} from "@mui/material";
import React from "react";

interface ModalWindowProps{
    open: boolean,
    close: ()=>void
}

export const ModalWindow:React.FC<ModalWindowProps> = ({open, close}) =>{
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #134EE7',
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
    };
    return(
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Успех!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Ваша заявка успешно отправлена в нашу службу поддержки, мы свяжемся с вами в течении суток с момента подачи заявки по указанному вами номеру.
                </Typography>
            </Box>
        </Modal>
    )
}