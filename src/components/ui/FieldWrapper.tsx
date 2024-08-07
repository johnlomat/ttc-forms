import clsx from 'clsx'

const FieldWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={clsx(className, 'w-full items-center space-y-1.5')}>{children}</div>
}

export default FieldWrapper
