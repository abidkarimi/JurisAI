import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return {
            userId: decodedToken.userId,
            username: decodedToken.username,
            email: decodedToken.email
        };
    } catch (error: any) {
        throw new Error(error.message);
    }

}