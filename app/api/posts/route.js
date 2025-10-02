import { NextResponse } from "next/server";

export async function GET(params) {
    return NextResponse.json({message:"hello from posts api"},{status:200})
    
}