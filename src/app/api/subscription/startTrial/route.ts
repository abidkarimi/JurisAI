import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userId } = reqBody;

        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Start the trial
        user.subscriptionType = "trial";
        user.subscriptionStartDate = new Date();
        user.subscriptionEndDate = new Date();
        user.subscriptionEndDate.setDate(user.subscriptionEndDate.getDate() + 3); // Three days trial
        
        await user.save();

        return NextResponse.json({
            message: "Trial started successfully",
            success: true,
            user
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
