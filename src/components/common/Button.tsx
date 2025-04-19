import { cn } from "@/lib/utils"
import Link from "next/link"

type Props = {
  variant?: "primary" | "outline"
  as?: "link" | "button"
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = "primary",
  as = "button",
  href,
  onClick,
  children,
  className,
}: Props) {
  const base = "rounded-lg m-3 px-12 py-5 font-semibold m- transition"
  const variants = {
    primary: "bg-green-1 text-white hover:bg-blue-1",
    outline: "bg-white text-black  hover:bg-green-1 hover:text-white",
  }

  const classes = cn(base, variants[variant], className)

  if (as === "link" && href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  return <button onClick={onClick} className={classes}>{children}</button>
}
