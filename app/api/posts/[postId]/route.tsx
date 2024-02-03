import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    if (!params.postId) {
      return new NextResponse("Post ID is required", { status: 400 });
    }

    const post = await prisma.post.deleteMany({
      where: {
        id: params.postId,
      },
    });
    return NextResponse.json(post);
    
  } catch (error) {
    console.log("[POSTS_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
