import express, { Request, Response } from 'express';
import { Donation } from '../models/donation';

const router = express.Router();

export const donations: Donation[] = [];

// Get all donations for a user
router.get('/donations', (req: Request, res: Response) => {
  const userId = Number(req.query.userId);
  const userDonations = donations.filter((donation) => donation.userId === userId);
  res.status(200).json(userDonations);
});

// Add a new donation for a user
router.post('/donations', (req: Request, res: Response) => {
  const newDonation: Donation = req.body;
  donations.push(newDonation);
  res.status(201).json(newDonation);
});

export default router;