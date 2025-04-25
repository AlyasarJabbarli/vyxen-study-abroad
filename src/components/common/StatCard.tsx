"use client"
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import CountUp from 'react-countup';

interface StatCardProps {
    number: number;
    label: string;
    icon: React.ReactNode;
    iconBgColor?: string;
    bg?: string;
    textColor?: string;
    className?: string;
    isThousand?: boolean;
}

const StatCard = ({
    number,
    label,
    icon,
    iconBgColor = "bg-orange-background",
    bg = "before:bg-orange-1",
    textColor = "text-orange-1",
    className,
    isThousand = false,
}: StatCardProps) => {
    return (
        <Card className={cn(`flex flex-col lg:flex-row items-center rounded-none gap-11 px-16 pt-6 pb-11 hover:shadow-card-dark hover:z-10 duration-200 relative`, className)}>
                <div
                    className={cn(
                        `w-28 h-28 rounded-full flex items-center justify-center before:h-24 before:w-1 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2`,
                        iconBgColor, bg
                    )}
                >
                    <div className={textColor}>{icon}</div>
                </div>


            <CardContent className="p-0">
                <h4 className="font-light text-7xl flex items-end gap-1">
                    <CountUp enableScrollSpy end={number} duration={2.5} />
                    {isThousand && "K"}
                    <span>+</span>
                </h4>
                <h5 className="text-lg text-secondary mt-2.5">{label}</h5>
            </CardContent>
        </Card>
    );
};

export default StatCard;
