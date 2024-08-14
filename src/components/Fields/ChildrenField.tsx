'use client'

import { useState } from 'react'
import FieldWrapper from '@/components/ui/FieldWrapper'
import { FieldProps } from '@/types/FieldProps'
import RepeaterButton from '@/components/ui/RepeaterButton'
import RepeaterCard from '@/components/ui/RepeaterCard'
import SingleField from '@/components/Fields/SingleField'
import SexField from '@/components/Fields/SexField'

const ChildrenField = ({ className }: FieldProps) => {
  const [isRepeaterOpen, setIsRepeaterOpen] = useState(false)

  const handleClick = () => {
    setIsRepeaterOpen(true)
  }

  const handleClickRemove = () => {
    setIsRepeaterOpen(false)
  }

  return (
    <>
      {isRepeaterOpen && (
        <RepeaterCard label="Child's Details" onClick={handleClickRemove}>
          <SingleField title="Age" description="(at Start of Policy)" type="number" required />
          <SexField required />
        </RepeaterCard>
      )}
      {!isRepeaterOpen && (
        <FieldWrapper className={className || ''}>
          <RepeaterButton label="Add Children" onClick={handleClick} />
        </FieldWrapper>
      )}
    </>
  )
}

export default ChildrenField
