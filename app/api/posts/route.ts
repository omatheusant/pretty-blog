import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET() {
  try {
    const posts = await prisma.post.findMany()
    return NextResponse.json(posts)
  } catch (error) {
    console.log("[PRODUCTS_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const post  = await prisma.post.create({
      data: {
        image_url: body
      }
    })
    
    return NextResponse.json(post);

  } catch (error) {
    console.log("[PRODUCTS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}