import express from 'express';
import donationsController from './controllers/donationsController';
import messageController from './controllers/messageController';
import cors from 'cors';
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(cors());

app.use('/api', donationsController);
app.use('/api', messageController);

// Handling non matching request from the client
app.use((req, res, next) => res.status(404).send("<h2>404 - Page not found</h2>"))
// Homepage
app.use('/', (req,res)=>res.send('Welcome to the Donation App'));


// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});