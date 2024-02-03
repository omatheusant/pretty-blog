"use client";

import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface ImageUploadProps {
  disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ disabled }) => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    try {
      const data = result.info.secure_url
      const config = { headers: {'Content-Type': 'application/json'} };
      axios.post(`/api/posts`, data, config )
      location.reload()
      toast.success('Imagem adicionada com sucesso!')
    } catch { 

     }

  };

  if (!isMounted) {
    return null;
  }

  return (
    <CldUploadButton uploadPreset="qthpei2u" onUpload={onUpload}>
      Adicionar Imagem
    </CldUploadButton>
  );
};

export default ImageUpload;
