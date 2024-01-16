import { Card, CardContent } from "@/app/components/ui/card";
import {
  Avatar,
  AvatarImage,
} from "@/app/components/ui/avatar";

export default function Home() {
  return (
    <section className="flex flex-col mt-8 items-center gap-8 sm:flex-row sm:justify-center flex-wrap">
      <div>
        <div className="flex items-center gap-3">
          <Avatar className="ml-2 mb-2">
            <AvatarImage src="https://i.postimg.cc/63d3npZH/lud.webp" />
          </Avatar>
          <span className="uppercase text-secondary-foreground  font-bold">
            Lud_caires
          </span>
        </div>
        <Card>
          <CardContent>
            <img
              className="rounded-2xl"
              src="http://placekitten.com/250/250"
              alt=""
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
