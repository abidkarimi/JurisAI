// api/places.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { input } = req.query;
    console.log("Inside Serverless API ", input)
    try {
        const response = await axios.get('http://127.0.0.1:5000/api', {
            params: {
                input
                // key: process.env.GOOGLE_PLACES_API_KEY!, // Replace with your Google Places API key
                // types: '(cities)',
            },
        });
        console.log("Response from RAG in places.ts" , response.data)
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
