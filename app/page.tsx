'use client'

import { Card, CardContent } from "@/app/components/ui/card";
import { AvatarLud } from "./components/avatar-lud";
import ImageUpload from "./components/ui/upload";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "@prisma/client";
import { Gaegu } from "next/font/google";


const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ['300', '400', '700'],
});

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

useEffect(() => {
    axios.get('/api/posts').then(res => setPosts(res.data))
}, [])
console.log(posts)

  return (
    <section className={`${gaegu.className} flex flex-col mt-8 items-center gap-8 sm:flex-row sm:justify-center flex-wrap relative pt-10`}>
      <div className="bg-secondary py-1 px-2 rounded-md absolute right-5 top-0">
        <ImageUpload />
      </div>
      {posts.length === 0 && <Image className="" src={'/loading.gif'} width={500} height={500} alt=""/>}
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <AvatarLud />
            <Card>
              <CardContent className="p-2">
                <Image
                  width={300}
                  height={300}
                  className="rounded-2xl object-cover"
                  src={post.image_url}
                  alt="Blog image"
                  priority
                />
              </CardContent>
            </Card>
          </div>
        );
      })}
    </section>
  );
}
