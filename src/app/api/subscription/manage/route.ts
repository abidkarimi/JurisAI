import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userId, newSubscriptionType } = reqBody;

        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Check if the user's subscription has ended
        if (user.subscriptionEndDate && user.subscriptionEndDate < new Date()) {
            return NextResponse.json({ error: "Access denied. Subscription has ended." }, { status: 403 });
        }

        // Manage subscriptions (upgrade/downgrade/cancel)
        if (newSubscriptionType === "cancel") {
            user.subscriptionType = null;
            user.subscriptionStartDate = null;
            user.subscriptionEndDate = null;
        } else {
            user.subscriptionType = newSubscriptionType;
            user.subscriptionStartDate = new Date();
            if (newSubscriptionType === "trial") {
                user.subscriptionEndDate = new Date();
                user.subscriptionEndDate.setDate(user.subscriptionEndDate.getDate() + 3); // Three days trial
            } else if (newSubscriptionType === "monthly") {
                user.subscriptionEndDate = new Date();
                user.subscriptionEndDate.setMonth(user.subscriptionEndDate.getMonth() + 1); // One month subscription
            }
        }

        await user.save();

        return NextResponse.json({
            message: "Subscription updated successfully",
            success: true,
            user
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// import User from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//     try {
//         const reqBody = await request.json();
//         const { userId, newSubscriptionType } = reqBody;

//         // Find the user
//         const user = await User.findById(userId);
//         if (!user) {
//             return NextResponse.json({ error: "User not found" }, { status: 404 });
//         }

//         // Manage subscriptions (upgrade/downgrade/cancel)
//         if (newSubscriptionType === "cancel") {
//             user.subscriptionType = null;
//             user.subscriptionStartDate = null;
//             user.subscriptionEndDate = null;
//         } else {
//             user.subscriptionType = newSubscriptionType;
//             user.subscriptionStartDate = new Date();
//             if (newSubscriptionType === "trial") {
//                 user.subscriptionEndDate = new Date();
//                 user.subscriptionEndDate.setDate(user.subscriptionEndDate.getDate() + 3); // Three days trial
//             } else if (newSubscriptionType === "monthly") {
//                 user.subscriptionEndDate = new Date();
//                 user.subscriptionEndDate.setMonth(user.subscriptionEndDate.getMonth() + 1); // One month subscription
//             }
//         }

//         await user.save();

//         return NextResponse.json({
//             message: "Subscription updated successfully",
//             success: true,
//             user
//         });
//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }
