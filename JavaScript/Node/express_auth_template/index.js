import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import v1 from '@/routes/v1/index.js'
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()
const port = 5000

// app config
dotenv.config();
app.disable('x-powered-by')
app.use(helmet())
app.use(cors({
  origin: '*',  
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json())

// routes 
app.use('/v1', v1)
app.get("/", (req, res) => {
  res.send("Api Siappp");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}, http://127.0.0.1:${port}`)
})