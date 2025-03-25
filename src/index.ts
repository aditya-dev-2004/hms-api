import express from 'express';
import "reflect-metadata";
import dotenv from 'dotenv';
import {route} from './route/router'
const app = express();
dotenv.config();
app.use("/v1/api",route)////00/test
const PORT = process?.env?.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Hi your server is running on ${PORT} port`);

})