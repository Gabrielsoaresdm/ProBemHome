import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./Sobre.css"


function Sobre(){
    return(
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={6}>
                    <div className="h1">
                    <h1>O ProBem</h1>
                    </div>
                    <p className="p">Enxergando a dificuldade ao acesso à itens hospitalares duráveis, criamos o ProBem; uma plataforma capaz viabilizar democraticamente esses itens, através do que consideramos algo muito importante: o afeto de pessoas!</p>
                </Grid>
                <Grid item xs={6} >
                    <img className="img1" src="https://s3-alpha-sig.figma.com/img/d4db/14e8/b7df6bde4bd1dda51d3efff430cf4f4f?Expires=1673222400&Signature=oALwP7vb5daFGT2IbkmgWHQWEcooOJfmtEHdQmqdm2Jau11pXGXzpgH3484sTFOyHId6OMVWxFgZMj-BjK2uGyAzQMGiteGf7yzOpWmihZytCV7sggOW-8UGuakXhG5vllm3t-6PMdfaxIGVqTPIV2WhgOhJTQrKjI8uH1YtVTXxLANsjHnT8ITnMmgLvpmnIEPwTVVEmjokxkoFt1msKc1aKZw9q~dzKKFjmrloMB3uSzFOvJrYEuZ705XgznklLZr~1oQTjs3nyeoKZ4u5iXbXSddWp0VvBiHKgYgEpXwLtZCOeMrIi3VCDtzQdy~epv~ZtNVdMhEVKntnGgZYJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width="1000px" />
                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;