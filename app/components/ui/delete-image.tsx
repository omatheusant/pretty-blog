"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

interface DeleteImageProps {
  postId: string;
}

export const DeleteImage: React.FC<DeleteImageProps> = ({ postId }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onDelete = () => {
    try {
      setLoading(true);
      axios.delete(`/api/posts/${postId}`);
      toast.success("Imagem apagada com sucesso!");
      location.reload()
    } catch (error) {
      toast.error("Alguma coisa deu errado!");
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="absolute top-4 right-4" variant={"ghost"}>
          <Trash size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl">Tem certeza?</DialogTitle>
        </DialogHeader>
        <div className="w-full flex justify-center flex-col">
          <Button
            variant={"destructive"}
            className="text-2xl uppercase"
            onClick={onDelete}
            disabled={loading}
          >
            Apagar Imagem
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
