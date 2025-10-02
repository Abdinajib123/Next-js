import { readData } from "@/app/helper/utils";
import { read } from "fs";
import { NextResponse } from "next/server";

export async function GET(params) {
    const getdata = await readData();
    return NextResponse.json(getdata,{status:200})
    
}