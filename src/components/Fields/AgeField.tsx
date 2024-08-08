import FieldWrapper from '@/components/ui/FieldWrapper'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

const AgeField = ({ className }: { className?: string }) => {
  return (
    <FieldWrapper className={className || ''}>
      <Label htmlFor="age">
        Age <span className="text-neutral-400">(at Start of Policy)</span>
        <span className="text-red-500"> *</span>
      </Label>
      <Input type="number" id="age" />
    </FieldWrapper>
  )
}

export default AgeField
