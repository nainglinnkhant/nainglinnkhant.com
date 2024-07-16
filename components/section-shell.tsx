import { cn } from "@/lib/utils"

export function SectionShell({
  children,
  id,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section id={id} className="overflow-x-hidden px-6 sm:px-16">
      <div className={cn("mx-auto max-w-2xl", className)} {...props}>
        {children}
      </div>
    </section>
  )
}
