'use client'

import { Checkbox } from '@/components/ui/Checkbox'
import FieldWrapper from '@/components/ui/FieldWrapper'

const AgreeField = ({ className }: { className?: string }) => {
  return (
    <FieldWrapper className={className || ''}>
      <div className="flex items-start space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          <span className="text-red-500">* </span>
          To continue, please click here so we can send your quote and other relevant info like
          discounts and benefits. Your info is never shared outside Talent Trust and you can opt out
          at any time.
        </label>
      </div>
    </FieldWrapper>
  )
}

export default AgreeField
