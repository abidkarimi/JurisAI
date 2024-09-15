
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { input } = req.query;
    console.log("Inside Serverless inside places.tsx", input)
    try {
        const response = await axios.get('http://localhost:5000/api', {
            params: {
                input
                // key: process.env.GOOGLE_PLACES_API_KEY!, // Replace with your Google Places API key
                // types: '(cities)',
            },
        });
        console.log("Response from RAG in places.ts Success" , response.data)
        res.json(response.data);
    } catch (error) {
        console.log("CL Response from RAG in places.ts Error",error)
        console.error("CE Response from RAG in places.ts Error",error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
