import { cityName } from "@/app/lib/city-name";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const items = await cityName();
    console.log(items)
    return NextResponse.json({items},{status:200})
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json({ status: 500, success: false, error: error }, { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
