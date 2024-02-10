import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";
import Reveal from "@/app/components/utils/reveal";
import { Link } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { MdPix } from "react-icons/md";

const DonatePage = () => {
  return (
    <div className="w-full  flex items-center justify-center text-lg mt-6">
      <Card className="w-full border-none border-secondary-foreground text-secondary lg:max-w-[65vw] ">
        <Reveal index={1}>
          <CardHeader className="items-center justify-center text-center sm:text-xl">
            <CardTitle className="text-4xl sm:text-5xl">
              Gostaria de me ajudar?
            </CardTitle>
            <CardDescription className="text-xl">
              Se gostou do meu trabalho e gostaria de contribuir de alguma
              forma, ficarei muito feliz.
            </CardDescription>
          </CardHeader>
        </Reveal>
        <Reveal index={2}>
          <CardContent className="justify-center flex flex-col items-center gap-4 relative">
            <h2 className="font-bold text-2xl text-secondary">
              💗 Me faz um pix? 💗
            </h2>
            <div className="flex flex-col items-center">
              <Button className="text-3xl flex items-center gap-2 min-w-48 md:w-56">
                <MdPix size={32} />
                16992265097
              </Button>
              <Image
                className="absolute"
                src={"/cute.gif"}
                width={200}
                height={200}
                alt=""
              />
            </div>
          </CardContent>
        </Reveal>
      </Card>
    </div>
  );
};

export default DonatePage;
