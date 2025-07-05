import { NextRequest, NextResponse } from "next/server";
import prisma from "@templatoon/db";

export async function POST(req: NextRequest) {
  const { name, content } = await req.json();

  if (!name || !content) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const template = await prisma.template.create({
      data: { name, content },
    });
    console.log({ name, content });
    return NextResponse.json(template, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
