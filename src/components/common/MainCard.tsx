import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

type InfoCardProps = {
  icon?: ReactNode;         // for icon or step number badge
  iconBg?: string;
  title: string;
  description: string;
  centered?: boolean;        // for Career Counseling style
  className?: string;        // extra styles
};

export const MainCard = ({ icon,iconBg, title, description, centered = false, className }: InfoCardProps) => {
  return (
    <Card className={`relative overflow-hidden rounded-2xl px-4 py-10 hover:shadow-card duration-200  before:w-16 before:h-40 before:bg-background-secondary before:rounded-full before:absolute before:-top-11 before:left-1 before:-rotate-45 ${className ?? ""}`}>
      <CardHeader className={centered ? "items-center text-center space-y-4" : "flex-row items-start gap-12"}>
        <div className={`${iconBg || 'bg-orange-500'} text-white rounded-full p-2 text-sm flex items-center justify-center w-14 h-14 shadow-md relative z-10`}>
          {icon}
        </div>
        <h3 className="text-2xl font-semibold leading-tight">
          {title}
        </h3>
      </CardHeader>
      <CardContent className={centered ? "text-center" : ""}>
        <p className="text-tgray ">{description}</p>
      </CardContent>
    </Card>
  );
};
