import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetQuestionAction } from "../store/reducers/reducerQuest";
import { useNavigate } from "react-router-dom";

export const ResultLayout = () => {

    const dispatch = useDispatch();
    const result = useSelector(state => state.result)
    console.log(result[0])
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "left", margin: '30px 0px 0px 40px' }}>
            <Button variant="contained" color="success" onClick={()=>{
                dispatch(resetQuestionAction());
                navigate('/')
            }}>Назад</Button>
            <Box style={{marginTop: "20px"}}>
                <TextField 
                    disabled
                    value={JSON.stringify(result)}
                    multiline
                    rows={10}
                    sx={{width: "80%"}}
                />
            </Box>

        </div>
    );
}