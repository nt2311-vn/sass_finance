import Link from "next/link";
import { useMedia } from "react-use";

import { Button } from "@/components/ui/button";
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus:visited:ring-offset-transparent outline-none text-white focus:text-white/30 transition",
        isActive ? "bg-white/10 text-white" : "bg-transparent",
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
