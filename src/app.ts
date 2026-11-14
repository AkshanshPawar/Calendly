import express from 'express';

const app = express();
app.get("/health",(_req,res) => {
    console.log("Exceuted health route");
    res.json({
        status : "ok!",
        timestamp : new Date().toISOString()
    })
})
export {app};