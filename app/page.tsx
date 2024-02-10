"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { AvatarLud } from "./components/avatar-lud";
import ImageUpload from "./components/ui/upload";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "@prisma/client";

import { useSession } from "next-auth/react";
import { Trash } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { DeleteImage } from "./components/ui/delete-image";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const { data: session } = useSession();

  useEffect(() => {
    axios.get("/api/posts").then((res) => setPosts(res.data));
  }, []);
  console.log(posts);

  return (
    <section
      className={`flex flex-col mt-8 items-center gap-8 sm:flex-row sm:justify-center flex-wrap relative pt-10`}
    >
      {session && (
        <div className="bg-secondary py-1 px-2 rounded-md absolute right-5 top-0">
          <ImageUpload />
        </div>
      )}
      {posts.length === 0 && (
        <Image
          className=""
          src={"/loading.gif"}
          width={500}
          height={500}
          alt=""
        />
      )}
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <AvatarLud />
            <Card className="border-none rounded-2xl">
              <CardContent className="p-2 relative">
                <Image
                  width={300}
                  height={300}
                  className="rounded-2xl object-cover"
                  src={post.image_url}
                  alt="Blog image"
                  priority
                  quality={100}
                />
                {session && <DeleteImage postId={post.id} />}
              </CardContent>
            </Card>
          </div>
        );
      })}
    </section>
  );
}
