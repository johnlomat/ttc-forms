import FieldWrapper from '@/components/ui/FieldWrapper'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

const LengthCoverageField = ({ className }: { className?: string }) => {
  return (
    <FieldWrapper className={className || ''}>
      <Label htmlFor="length_of_coverage">Length of Coverage</Label>
      <Input type="text" id="length_of_coverage" value="1 year" disabled />
    </FieldWrapper>
  )
}

export default LengthCoverageField
