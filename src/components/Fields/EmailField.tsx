import FieldWrapper from '@/components/ui/FieldWrapper'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

const EmailField = ({ className }: { className?: string }) => {
  return (
    <FieldWrapper className={className || ''}>
      <Label htmlFor="email">
        Email<span className="text-red-500"> *</span>
      </Label>
      <Input type="email" id="email" />
    </FieldWrapper>
  )
}

export default EmailField
