import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js'; // Corrected import path by adding '.js'

/**import connection file */
import connect from './database/conn.js'; 

const app = express();

/**app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config(); // Load environment variables

/**application port */
const port = process.env.PORT || 8080;

/**routes */
app.use('/api', router); // APIs

app.get('/', (req, res) => {
    try {
        res.json("Get Request");
    } catch (error) { // Catch the error properly
        res.json(error);
    }
})

/**start server only when we have valid connection */
connect().then(() => {
    app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
    });
}).catch(error => {
    console.log("Error establishing database connection:", error);
});
