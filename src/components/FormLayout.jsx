import React from "react"
import { Box, Card, CardContent, Grid, TextField, Radio, FormLabel, RadioGroup, FormControlLabel, CardActions, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addQuestionAction, addResultAction, addWorkerCountAction, removeQuestionAction } from "../store/reducers/reducerQuest"
import axios from "axios"


export const FormLayout = () => {

    const [countWorker, setCountWorker] = React.useState()
    const [quest1, setQuest1] = React.useState();
    const [quest2, setQuest2] = React.useState();
    const [quest3, setQuest3] = React.useState();
    const [quest4, setQuest4] = React.useState();
    const [quest5, setQuest5] = React.useState();

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions)

    const navigate = useNavigate();

    const isEnabled = countWorker !== undefined && countWorker > 0 && quest1 !== undefined && quest2 !== undefined && quest3 !== undefined && quest4 !== undefined && quest5 !== undefined;

    const selectQuest1 = (event) => {
        setQuest1(event.target.value)
        if (event.target.value.startsWith('N1')) {
            removeQuestion("Q1");
        } else {
            addQuestion(event.target.value);
        }
    }

    const selectQuest2 = (event) => {
        setQuest2(event.target.value)
        if (event.target.value.startsWith('N2')) {
            removeQuestion("Q2");
        } else {
            addQuestion(event.target.value);
        }
    }

    const selectQuest3 = (event) => {
        setQuest3(event.target.value)
        if (event.target.value.startsWith('N3')) {
            removeQuestion("Q3");
        } else {
            addQuestion(event.target.value);
        }
    }

    const selectQuest4 = (event) => {
        setQuest4(event.target.value)
        if (event.target.value.startsWith('N4')) {
            removeQuestion("Q4");
        } else {
            addQuestion(event.target.value);
        }
    }

    const selectQuest5 = (event) => {
        setQuest5(event.target.value)
        if (event.target.value.startsWith('N5')) {
            removeQuestion("Q5");
        } else {
            addQuestion(event.target.value);
        }
    }

    const countWorkerChange = (event) => {
        setCountWorker(event.target.value)
        dispatch(addWorkerCountAction(event.target.value))
    }

    const addQuestion = (quest) => {
        dispatch(addQuestionAction(quest))
    }

    const removeQuestion = (quest) => {
        dispatch(removeQuestionAction(quest))
    }

    return (
        <div>
            <p style={{ textAlign: 'left', padding: '10px 0px 0px 40px', fontSize: 25, color: '#5b6880', fontWeight: 500 }}>Анкета</p>
            <Box width='70%' style={{ paddingLeft: '40px' }}>
                <Card>
                    <CardContent>
                        <Grid container style={{ textAlign: 'left', padding: 10 }} spacing={2}>
                            <Grid item xs={6}>
                                <Box component="form">


                                    <TextField
                                        id="outlined-number"
                                        label="Количество работников"
                                        type="number"
                                        value={countWorker || 0}
                                        onChange={(e) => countWorkerChange(e)}
                                        variant="standard"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />

                                </Box>
                                <Box style={{ marginTop: 20 }}>
                                    <FormLabel id="workerinv">Имеются ли у вас работники с инвалидностью 1 и 2 группы?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="workerinv"
                                        name="controlled-radio-buttons-group"

                                        onChange={selectQuest1}
                                    >
                                        <FormControlLabel value="Q1" control={<Radio color="success" />} label="Да" />
                                        <FormControlLabel value="N1" control={<Radio color="success" />} label="Нет" />
                                    </RadioGroup>
                                </Box>
                                <Box style={{ marginTop: 20 }}>
                                    <FormLabel id="younger">Работают ли у Вас лица младше восемнадцати лет?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="yonger"
                                        name="controlled-radio-buttons-group"

                                        onChange={selectQuest2}
                                    >
                                        <FormControlLabel value="Q2" control={<Radio color="success" />} label="Да" />
                                        <FormControlLabel value="N2" control={<Radio color="success" />} label="Нет" />
                                    </RadioGroup>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box style={{ marginTop: 20 }}>
                                    <FormLabel id="pregnant">Работают ли у Вас беременные женщины?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="pregnant"
                                        name="controlled-radio-buttons-group"

                                        onChange={selectQuest3}
                                    >
                                        <FormControlLabel value="Q3" control={<Radio color="success" />} label="Да" />
                                        <FormControlLabel value="N3" control={<Radio color="success" />} label="Нет" />
                                    </RadioGroup>
                                </Box>
                                <Box style={{ marginTop: 20 }}>
                                    <FormLabel id="rotational">Применяется ли у Вас вахтовый метод работы?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="rotational"
                                        name="controlled-radio-buttons-group"

                                        onChange={selectQuest4}
                                    >
                                        <FormControlLabel value="Q4" control={<Radio color="success" />} label="Да" />
                                        <FormControlLabel value="N4" control={<Radio color="success" />} label="Нет" />
                                    </RadioGroup>
                                </Box>
                                <Box style={{ marginTop: 20 }}>
                                    <FormLabel id="harmful">Имеются ли у вас вредные, опасные условия труда?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="harmful"
                                        name="controlled-radio-buttons-group"

                                        onChange={selectQuest5}
                                    >
                                        <FormControlLabel value="Q5" control={<Radio color="success" />} label="Да" />
                                        <FormControlLabel value="N5" control={<Radio color="success" />} label="Нет" />
                                    </RadioGroup>
                                </Box>
                            </Grid>
                        </Grid>

                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="success" disabled={!isEnabled} onClick={() => {
                            axios.post('https://hrtest.enbek.kz/api/selftest/get/sections?ignoreCaptcha=true', questions)
                                .then(res => {
                                    dispatch(addResultAction(res.data));
                                    navigate('/result')
                                })
                                .catch(err => {
                                    console.error(err);
                                })
                            //;
                        }}>Пройти самопроверку</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}