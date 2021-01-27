import "dotenv/config";
import userController from "./app/controllers/UserController";

import express from 'express';

const app = express();

app.use(express.json());
app.post('/users', userController.store);

app.listen(3333, () => {
    console.log(`Server running at 3333`)
});