import { Card, CardContent } from "@/app/components/ui/card";
import { AvatarLud } from "./components/avatar-lud";
import ImageUpload from "./components/ui/upload";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { Post } from "@prisma/client";

export default async function Home() {


  const posts: Post[] = await prisma.post.findMany({
    orderBy: {
      id: 'desc'
    }
  });

  return (
    <section className="flex flex-col mt-8 items-center gap-8 sm:flex-row sm:justify-center flex-wrap relative pt-10">
      <div className="bg-secondary py-1 px-2 rounded-md absolute right-5 top-0">
        <ImageUpload />
      </div>
      {posts.length === 0 && <p>No results!</p>}
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <AvatarLud />
            <Card>
              <CardContent className="w-[250px] h-[250px]">
                <Image
                  width={250}
                  height={250}
                  className="rounded-2xl object-cover"
                  src={post.image_url}
                  alt="Blog image"
                />
              </CardContent>
            </Card>
          </div>
        );
      })}
    </section>
  );
}
