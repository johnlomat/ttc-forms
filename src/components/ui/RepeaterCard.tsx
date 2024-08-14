import Image from 'next/image'
import Card from '@/components/ui/Card'

const RepeaterCard = ({
  label,
  children,
  onClick,
}: {
  label: string
  children: React.ReactNode
  onClick?: () => void
}) => {
  return (
    <Card className="col-span-1 py-[30px] md:col-span-2">
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
        <div className="col-span-1 flex justify-between md:col-span-2">
          <span className="text-[18px] font-bold text-primary">{label}</span>
          <div
            className="inline-flex select-none items-center gap-[5px] text-[16px] text-[#819DB2] hover:cursor-pointer"
            onClick={onClick}
          >
            <span className="hidden md:block">Remove </span>
            <Image src="/images/minus-round-blue.png" alt="minus icon" width={15} height={15} />
          </div>
        </div>
        {children}
      </div>
    </Card>
  )
}

export default RepeaterCard
