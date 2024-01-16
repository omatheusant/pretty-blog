import { Card, CardContent } from "@/app/components/ui/card";
import { AvatarLud } from "./components/avatar-lud";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col mt-8 items-center gap-8 sm:flex-row sm:justify-center flex-wrap">
      <div>
        <AvatarLud />
        <Card>
          <CardContent className="w-[250px] h-[250px]">
            <Image width={250} height={250}  className="rounded-2xl object-cover" src="/img/imgteste1.jpg" alt="" />
          </CardContent>
        </Card>
      </div>
      <div>
        <AvatarLud />
        <Card>
          <CardContent className="w-[250px] h-[250px]">
            <Image width={250} height={250} className="rounded-2xl object-cover" src="/img/imgteste2.jpg" alt="" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
