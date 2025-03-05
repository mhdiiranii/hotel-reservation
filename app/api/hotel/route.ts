import { myHotel } from "@/app/lib/my-hotel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data: any = await myHotel();
    const { city, rating } = await req.json();
    if (city && rating) {
      const items: any = data.filter((hotel: any) => hotel.location === city && hotel.rating === rating);
      return NextResponse.json({ data: items });
    } else if (!city && rating) {
      const items: any = data.filter((hotel: any) =>  hotel.rating === rating);
      return NextResponse.json({ data: items });
    } else if (city && !rating) {
      const items: any = data.filter((hotel: any) =>  hotel.location === city);
      return NextResponse.json({ data: items });
    } else {
      const items: any = data;
      return NextResponse.json({ data: items });
    }
  } catch (error: unknown) {
    console.error("Error fetching items:", error);
    return NextResponse.json({ status: 500, success: false, error: error }, { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
