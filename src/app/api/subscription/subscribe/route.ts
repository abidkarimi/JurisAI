import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userId, subscriptionType} = reqBody;
        console.log(userId, subscriptionType);

        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Subscribe to monthly plan
        user.subscriptionType = "monthly";
        user.subscriptionStartDate = new Date();
        user.subscriptionEndDate = new Date();
        user.subscriptionEndDate.setMonth(user.subscriptionEndDate.getMonth() + 1); // One month subscription
        
        await user.save();

        return NextResponse.json({
            message: "Subscribed to monthly plan successfully",
            success: true,
            // user
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
