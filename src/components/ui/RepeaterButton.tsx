import Image from 'next/image'

const RepeaterButton = ({ label }: { label: string }) => {
  return (
    <div className="inline-flex w-[220px] select-none items-center gap-[10px] rounded-md bg-sky-50 px-[20px] py-[10px] hover:cursor-pointer">
      <Image src="/images/plus-round.png" alt="plus icon" width={20} height={20} />{' '}
      <span className="text-[16px] font-bold uppercase text-primary">{label}</span>
    </div>
  )
}

export default RepeaterButton
