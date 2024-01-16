import { Avatar, AvatarImage } from "@/app/components/ui/avatar";

export const AvatarLud = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="ml-2 mb-2">
        <AvatarImage src="https://i.postimg.cc/63d3npZH/lud.webp" />
      </Avatar>
      <span className="uppercase text-secondary-foreground  font-bold">
        Lud_caires
      </span>
    </div>
  );
};
