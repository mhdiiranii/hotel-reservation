import { myHotel } from "@/app/lib/my-hotel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.nextUrl);
    const slug = url.pathname.split("/").pop();
    const data: any = await myHotel();
    const items = data.find((hotel: { slug: string }) => hotel.slug === slug); 
    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json({ status: 500, success: false, error: error }, { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
