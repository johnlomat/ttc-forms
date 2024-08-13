import Image from 'next/image'
import FieldWrapper from '@/components/ui/FieldWrapper'
import { FieldProps } from '@/types/FieldProps'
import RepeaterButton from '@/components/ui/RepeaterButton'
import Card from '@/components/ui/Card'
import SingleField from './SingleField'
import SexField from './SexField'

const SpouseField = ({ className }: FieldProps) => {
  return (
    <>
      <Card className="col-span-1 py-[30px] md:col-span-2">
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
          <div className="col-span-1 flex justify-between md:col-span-2">
            <span className="text-[18px] font-bold text-primary">Spouse Details</span>
            <div className="inline-flex select-none items-center gap-[5px] text-[16px] text-[#819DB2] hover:cursor-pointer">
              Remove{' '}
              <Image src="/images/minus-round-blue.png" alt="minus icon" width={15} height={15} />
            </div>
          </div>
          <SingleField title="Age" description="(at Start of Policy)" type="number" required />
          <SexField />
        </div>
      </Card>
      <FieldWrapper className={className || ''}>
        <RepeaterButton label="Add Spouse" />
      </FieldWrapper>
    </>
  )
}

export default SpouseField
