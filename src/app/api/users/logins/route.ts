
import { NextRequest, NextResponse } from "next/server";
import axios from "axios"; // Import axios for making HTTP requests

export async function POST(request: NextRequest) {
    try {
        // console.log("Inside Serverless APIchanged api/users/logins 1" )

        const flaskResponse = await axios.get('http://rag-service:5000/api', {
            params: {
              input: "what is this book about?" // Example query parameter you want to send
            }
          });
// console.log("SErverless after call ", flaskResponse)
    // If the Flask response is successful, return it in the Next.js API response
    const response1 = NextResponse.json({
        message: "Response from Assistant API",
        success: true,
        flaskData: flaskResponse.data,  // Including Flask response data
      });
  
      return response1;

    } catch (error: any) {
        console.log("Error in api.users.logins ", error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}