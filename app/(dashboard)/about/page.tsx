import Reveal from "@/app/components/utils/reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <div className={`w-full  flex items-center justify-center text-lg mt-6`}>
      <Card className="w-full border-none border-secondary-foreground text-secondary lg:max-w-[65vw] ">
        <Reveal index={1}>
          <CardHeader className="items-center justify-center text-center sm:text-xl">
            <CardTitle className="text-4xl sm:text-5xl">
              Oi, eu sou Ludmila!
            </CardTitle>
            <CardDescription className="text-xl">
              Tenho 18 anos e eu amo tirar fotos. Por isso criei esse site para
              mostrar todas minhas fotos pra todos, espero que gostem!
            </CardDescription>
          </CardHeader>
        </Reveal>
        <Reveal index={2}>
          <CardContent className="justify-center flex flex-col items-center gap-4">
            <h2 className="font-bold text-2xl text-secondary">
              💗 Minhas redes 💗
            </h2>
            <div className="flex flex-col gap-5 items-center">
              <Link
                href="https://www.instagram.com/lud_caires?igsh=bXcwMHdndmpkdHZp&utm_source=qr"
                target="_blank"
              >
                <Button className="text-2xl flex items-center gap-2 min-w-48 md:w-56">
                  <FaInstagram size={25} />
                  Instagram
                </Button>
              </Link>
              <Link
                href="https://www.tiktok.com/@lud_7caires?_t=8jWudcw0i2v&_r=1"
                target="_blank"
              >
                <Button className="text-2xl flex items-center gap-2 min-w-48 md:w-56">
                  <FaTiktok size={25} />
                  Tik Tok
                </Button>
              </Link>
            </div>
          </CardContent>
        </Reveal>
      </Card>
    </div>
  );
};
export default About;
