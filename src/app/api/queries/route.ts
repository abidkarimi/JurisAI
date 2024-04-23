import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { ObjectId } from "mongodb";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userId, question, answer } = reqBody;
        console.log(reqBody)

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