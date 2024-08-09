import FieldWrapper from '@/components/ui/FieldWrapper'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { FieldProps } from '@/types/FieldProps'

const SingleField = ({
  title,
  fieldId,
  className,
  type,
  description,
  placeholder,
  value,
  required,
  disabled,
}: FieldProps) => {
  return (
    <FieldWrapper className={className || ''}>
      {title && (
        <Label htmlFor={fieldId}>
          {title}
          {description && <span className="text-neutral-400"> {description}</span>}
          {required && <span className="text-red-500"> *</span>}
        </Label>
      )}
      <Input
        type={type}
        id={fieldId}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        className="bg-sky-50"
      />
    </FieldWrapper>
  )
}

export default SingleField
