"//@ts-expect-error"
import express from 'express';
import parkRouter from './routes/park.routes'
import { z } from 'zod';
const app = express();

app.use(express.json());

app.use('/api/v1/park', parkRouter);



const PORT =5000;
app.listen(PORT, ()=>{
     console.log(`server listeng on port ${PORT}`)
});