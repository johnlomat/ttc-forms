import { cn } from '@/lib/utils'

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        'rounded-md bg-white px-[30px] py-[20px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Card
