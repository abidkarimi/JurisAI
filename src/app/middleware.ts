import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

// Define the middleware function
export async function checkSubscriptionStatus(req: NextRequest, res: NextResponse, next: Function) {
  try {
    const userId = req.cookies.get("userId"); // Assuming you store the user ID in a cookie
    if (!userId) {
      return NextResponse.redirect("/login"); // Redirect to login page if user ID is not found
    }

    // Assuming User.findById is defined elsewhere and works asynchronously
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.redirect("/login"); // Redirect to login page if user is not found
    }

    // Check if the user's subscription has ended or trial has expired
    if (!user.subscriptionEndDate || user.subscriptionEndDate < new Date()) {
      // Subscription has ended or trial has expired
      return NextResponse.redirect("/renew-subscription"); // Redirect to subscription renewal page
    }

    // User has an active subscription or trial
    next(); // Continue to the next middleware or route handler
  } catch (error: any) {
    console.error(error);
    // Correctly return a response with a 500 status code and JSON body
    return new NextResponse(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Apply the middleware to relevant routes
export async function GET_dashboard(req: NextRequest, res: NextResponse) {
  try {
    // Use the middleware to check subscription status before allowing access to the dashboard
    await checkSubscriptionStatus(req, res, () => {
      // If subscription status check passes, render the dashboard
      // Note: NextResponse does not have a render method. You might need to adjust this part based on your actual implementation.
      // This example assumes you're sending a simple JSON response for demonstration.
      return new NextResponse(JSON.stringify({ message: "Dashboard" }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });
  } catch (error: any) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}