import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, content } = await req.json();

  console.log("POST: name and content****: ", { name, content });

  return NextResponse.json({ message: "Template received" }, { status: 200 });
}
