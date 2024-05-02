import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { ObjectId } from "mongodb";
// Import your AI model
// import AIModel from "@/models/AIModel";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userId, question, answer } = reqBody;
        console.log(reqBody)

        // Process the query using the AI model
        // const response = AIModel.processQuery(query);

        // Find the user
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Add the query to the user's queries array
        user.queries.push({ question, answer });
        await user.save();

        return NextResponse.json({
            message: "Query created successfully",
            success: true
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        // Parse the URL from the request
        const url = new URL(request.url);

        // Extract the userId query parameter
        const userId = url.searchParams.get('userId');
        console.log(userId);

        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        // Find the user using the userId
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Return the user's queries
        return NextResponse.json({
            queries: user.queries,
            success: true
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


// implement this code GET method when frontend is completed

// import jwt from 'jsonwebtoken';

// export async function GET(request: NextRequest) {
//     try {
//         // Extract the token from the request header
//         const token = request.headers.get('Authorization');
//         if (!token) {
//             return NextResponse.json({ error: "Authorization token is missing" }, { status: 400 });
//         }

//         // Decode the token to access the payload
//         const decodedToken = jwt.decode(token);
//         if (!decodedToken || typeof decodedToken !== 'object') {
//             return NextResponse.json({ error: "Invalid token" }, { status: 400 });
//         }

//         // Extract the userId from the decoded token
//         const userId = decodedToken.id;
//         if (!userId) {
//             return NextResponse.json({ error: "User ID not found in token" }, { status: 400 });
//         }

//         // Find the user using the userId
//         const user = await User.findById(userId);
//         if (!user) {
//             return NextResponse.json({ error: "User not found" }, { status: 404 });
//         }

//         // Return the user's queries
//         return NextResponse.json({
//             queries: user.queries,
//             success: true
//         });
//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }


export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userId, queryId, updatedQuestion, updatedAnswer } = reqBody;

        // Find the user
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Convert queryId to ObjectId for comparison
        const objectIdQueryId = new ObjectId(queryId);

        // Find the query by ID
        const query = user.queries.find((query: { _id: ObjectId; }) => query._id.equals(objectIdQueryId));

        if (!query) {
            return NextResponse.json({ error: "Query not found" }, { status: 404 });
        }

        // Update the query
        query.question = updatedQuestion;
        query.answer = updatedAnswer;

        await user.save();

        return NextResponse.json({
            message: "Query updated successfully",
            success: true
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userId, queryId } = reqBody;

        // Find the user
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Convert queryId to ObjectId
        const queryObjectId = new ObjectId(queryId);

        // Find the index of the query by ID
        const queryIndex = user.queries.findIndex((query: { _id: any }) => query._id.equals(queryObjectId));

        if (queryIndex === -1) {
            return NextResponse.json({ error: "Query not found" }, { status: 404 });
        }

        // Remove the query from the array
        user.queries.splice(queryIndex, 1);
        await user.save();

        return NextResponse.json({
            message: "Query deleted successfully",
            success: true
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}