import FieldWrapper from '@/components/ui/FieldWrapper'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

const FirstNameField = () => {
  return (
    <FieldWrapper>
      <Label htmlFor="first_name">
        First Name<span className="text-red-500"> *</span>
      </Label>
      <Input type="text" id="first_name" />
    </FieldWrapper>
  )
}

export default FirstNameField
