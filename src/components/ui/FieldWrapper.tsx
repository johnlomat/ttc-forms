import { cn } from '@/lib/utils'

const FieldWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('w-full items-center space-y-1.5', className)}>{children}</div>
}

export default FieldWrapper
