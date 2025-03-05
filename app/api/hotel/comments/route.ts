import { Comments } from "@/app/lib/comments";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data: any = await Comments();
    const { comments } = await req.json();
    const items : any = data.filter((hotel:any)=> hotel.slug === comments)
    console.log(items)
    return NextResponse.json({items},{status:200})
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json({ status: 500, success: false, error: error }, { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
