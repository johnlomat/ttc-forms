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
  const [repeaterCards, setRepeaterCards] = useState<{ id: number; content: React.ReactNode }[]>([])

  const handleClick = () => {
    setIsRepeaterOpen(true)

    const newCard = {
      id: Date.now(), // Unique identifier
      content: (
        <>
          <SingleField title="Age" description="(at Start of Policy)" type="number" required />
          <SexField required />
        </>
      ),
    }

    setRepeaterCards((prevCards) => [...prevCards, newCard])
  }

  const handleClickRemove = (idToRemove: number) => {
    setRepeaterCards((prevCards) => prevCards.filter((card) => card.id !== idToRemove))
  }

  return (
    <>
      {isRepeaterOpen &&
        repeaterCards.map((repeaterCard, index) => (
          <RepeaterCard
            key={repeaterCard.id} // Use the unique id as the key
            label={`Child's Details #${index + 1}`}
            onClick={() => handleClickRemove(repeaterCard.id)}
          >
            {repeaterCard.content}
          </RepeaterCard>
        ))}
      <FieldWrapper className={className || ''}>
        <RepeaterButton label="Add Children" onClick={handleClick} />
      </FieldWrapper>
    </>
  )
}

export default ChildrenField
