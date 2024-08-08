import FieldWrapper from '@/components/ui/FieldWrapper'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

const LastNameField = ({ className }: { className?: string }) => {
  return (
    <FieldWrapper className={className || ''}>
      <Label htmlFor="last_name">
        Last Name<span className="text-red-500"> *</span>
      </Label>
      <Input type="text" id="last_name" />
    </FieldWrapper>
  )
}

export default LastNameField
