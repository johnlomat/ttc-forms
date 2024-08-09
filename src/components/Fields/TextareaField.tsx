import FieldWrapper from '@/components/ui/FieldWrapper'
import { Textarea } from '@/components/ui/Textarea'
import { Label } from '@/components/ui/Label'
import { FieldProps } from '@/types/FieldProps'

const TextareaField = ({
  title,
  fieldId,
  className,
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
      <Textarea
        id={fieldId}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        className="bg-sky-50"
      />
    </FieldWrapper>
  )
}

export default TextareaField
