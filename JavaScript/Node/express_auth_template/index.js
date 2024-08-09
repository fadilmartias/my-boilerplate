import express from 'express'
// import { createHandler } from 'graphql-http/lib/use/express';
// import { schema } from '@/graphql/schema.js'
import cors from 'cors'
import helmet from 'helmet'
import v1 from '@/routes/v1/index.js'
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { sequelize } from '@/config/Sequelize.js';
import morgan from 'morgan';
import { formatInTimeZone } from 'date-fns-tz';
const app = express()
const port = 5000
const date = new Date();
// app config
dotenv.config({ path: '.env.local' });
morgan.token('clf', function () {
  const clf = formatInTimeZone(date, 'Asia/Jakarta', 'dd-MM-yyyy HH:mm:ss.SSSSSS');
  return clf
});
app.use(morgan('[:clf] - :method :url :status :response-time ms - :res[content-length] - HTTP/:http-version :remote-addr - :remote-user - :user-agent'))
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
// app.all('/graphql', createHandler({ schema }));
app.use('/v1', v1)
app.get("/", (req, res) => {
  res.send("Api Siappp");
});

const server = app.listen(port, async() => {
  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection has been established successfully.');
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }
  console.log(`Example app listening on port ${port}, http://127.0.0.1:${port}`)
})