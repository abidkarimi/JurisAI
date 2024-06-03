import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { fullName, email, password, lawFirm, areaOfPractice} = reqBody;

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create a new user with subscription details
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
            lawFirm,
            areaOfPractice,
            subscriptionType: "free", // Set subscription type to "free" by default
            subscriptionStartDate: new Date(), // Set start date to current date
            subscriptionEndDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Set end date for trial subscription (3 days)
        });

        // Save the new user
        const savedUser = await newUser.save();

        // Generate JWT token for the user
        const token = jwt.sign({ userId: savedUser._id }, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            user: savedUser,
            token
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}





// import { connect } from "@/dbConfig/dbConfig";
// import User from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// // import { sendEmail } from "@/helpers/mailer";


// connect()


// export async function POST(request: NextRequest) {
//     try {
//         const reqBody = await request.json()
//         const { fullName, email, password, lawFirm, areaOfPractice } = reqBody

//         console.log(reqBody);

//         //check if user already exists
//         const user = await User.findOne({ email })

//         if (user) {
//             return NextResponse.json({ error: "User already exists" }, { status: 400 })
//         }

//         //hash password
//         const salt = await bcryptjs.genSalt(10)
//         const hashedPassword = await bcryptjs.hash(password, salt)

//         const newUser = new User({
//             fullName,
//             email,
//             password: hashedPassword,
//             lawFirm,
//             areaOfPractice
//         })

//         const savedUser = await newUser.save()
//         console.log(savedUser);

//         //send verification email

//         // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})sxz

//         return NextResponse.json({
//             message: "User created successfully",
//             success: true,
//             savedUser
//         })

//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 })

//     }
// }