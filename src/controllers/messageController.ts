import express, { Request, Response } from 'express';
import { donations } from './donationsController';
const router = express.Router();

// Check if the user has made 2 or more donations and send a thank you message
router.get('/thankyou', (req: Request, res: Response) => {
  const userId = Number(req.query.userId);
  if(!userId)
    return res.status(401).send('Please Provide userID');
  
  const userDonations = donations.filter((donation) => donation.userId === userId);
  if (userDonations.length >= 2) {
    console.log(`Sending a special thank you message to user ${userDonations[0].userName}`);
    res.send('Thank you! We appreciate your support!');
  }else{
    res.send(`You need to make at least 2 donations to have a special gift!`);
  }
});

export default router;