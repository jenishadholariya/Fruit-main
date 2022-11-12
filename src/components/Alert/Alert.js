import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack';
import { resetAlert } from '../../redux/Action/alert.action';

function Alert(props) {
    const alert = useSelector(state => state.alert)
    console.log(alert);

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    useEffect(()=>{
        if (alert.text !== '') {
            enqueueSnackbar(alert.text,
                {
                    variant: alert.color,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
        }
        setTimeout(() => {dispatch(resetAlert())}, 1000);
    },[alert.text])

    return (
        <div>
            
        </div>
    );
}

export default Alert;