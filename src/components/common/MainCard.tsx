import { Card, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type InfoCardProps = {
  icon?: ReactNode;
  iconBg?: string;
  title: string;
  description: string;
  horizontal?: boolean;
  className?: string;
};

export const MainCard = ({
  icon,
  iconBg,
  title,
  description,
  horizontal = false,
  className,
}: InfoCardProps) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-2xl sm:px-4 py-10 hover:shadow-card duration-200",
        horizontal
          ? "before:w-12 before:h-33 before:-top-4 before:left-1"
          : "before:w-16 before:h-40 before:-top-11 before:left-1",
        "before:bg-background-secondary before:rounded-full before:absolute before:-rotate-45",
        className
      )}
    >
      <CardHeader
        className={cn(
          "flex",
          horizontal
            ? "flex-row items-center gap-6"
            : "flex-col items-start gap-12"
        )}
      >
        <div
          className={cn(
            iconBg ?? "bg-orange-1",
            horizontal ? "w-10 h-10" : "w-14 h-14",
            "text-white rounded-full p-2 font-bold flex items-center justify-center shadow-md relative z-10"
          )}
        >
          {icon}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
          <p className="text-tgray">{description}</p>
        </div>
      </CardHeader>
    </Card>
  );
};
