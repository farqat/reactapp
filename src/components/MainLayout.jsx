import { Box, Grid } from "@mui/material"
import * as React from "react"
import { FormLayout } from "./FormLayout"
import { Route, Routes } from "react-router-dom"
import { ResultLayout } from "./ResultLayout"


export const MainLayout = () => {
    return (
        <Grid container>
            <Grid item xs={2}>
                <Box sx={{ height: '100vh', bgcolor: "#1d293f" }}></Box>
            </Grid>
            <Grid item xs={10}>
                <Box sx={{ bgcolor: "#f1f4f8", textAlign: 'left', padding: '20px 40px', fontWeight: 'bold', fontSize: 30 }}>
                    Трудовой консультант
                </Box>
              
                <Routes>
                    <Route path="*" element={<FormLayout />} />
                    <Route path="/result" element={<ResultLayout />} />
                </Routes>
            </Grid>
        </Grid>
    )
}