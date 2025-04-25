import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
    number: string;
    label: string;
    icon: React.ReactNode;
    iconBgColor?: string;
    color?: string;
}

const StatCard = ({
    number,
    label,
    icon,
    iconBgColor = "bg-orange-background",
    color = "orange-1",
}: StatCardProps) => {
    return (
        <Card className="flex flex-row items-center gap-11 px-16 pt-6 pb-11 rounded-none hover:shadow-card duration-200 relative">
                <div
                    className={cn(
                        `w-28 h-28 rounded-full flex items-center justify-center before:h-24 before:w-1 before:bg-${color} before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2`,
                        iconBgColor
                    )}
                >
                    <div className={`text-${color}`}>{icon}</div>
                </div>


            <CardContent className="p-0">
                <h4 className="font-light text-7xl flex items-end gap-1">
                    {number}
                    <span>+</span>
                </h4>
                <h5 className="text-lg text-secondary mt-2.5">{label}</h5>
            </CardContent>
        </Card>
    );
};

export default StatCard;
