'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'
import {
  questionnaireActionsClassName,
  questionnaireCardClassName,
  questionnairePrimaryButtonClassName,
  questionnaireSecondaryButtonClassName,
} from './styles'

const DETAIL_CHOICES = [
  { value: 'concise', label: 'Concise summary' },
  { value: 'complete', label: 'Complete answer' },
] as const

const AUDIENCE_CHOICES = [
  { value: 'team', label: 'My team' },
  { value: 'public', label: 'Public audience' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireCustomValidation() {
  const [item, setItem] = React.useState('detail')
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [submitted, setSubmitted] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const detail = String(formData.get('detail') ?? '')
    const audience = String(formData.get('audience') ?? '')
    const nextErrors: Record<string, string> = {}

    if (detail === 'complete' && audience !== 'public') {
      nextErrors.audience = 'Choose Public audience for a complete answer.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setItem(Object.keys(nextErrors)[0])
      return
    }

    setSubmitted(true)
  }

  return (
    <div className={questionnaireCardClassName}>
      <Questionnaire.Root
        item={item}
        onItemChange={setItem}
        items={[
          { name: 'detail', required: true, choices: DETAIL_CHOICES },
          { name: 'audience', required: true, choices: AUDIENCE_CHOICES },
        ]}
        onSubmit={handleSubmit}
        className='gap-5'
      >
        <Questionnaire.Progress />

        <Questionnaire.Item name='detail' required className='space-y-2' invalid={Boolean(errors.detail)}>
          <Questionnaire.Title>How much detail should the answer include?</Questionnaire.Title>
          <Questionnaire.Description>Choose the response depth.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {DETAIL_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error>{errors.detail}</Questionnaire.Error>
        </Questionnaire.Item>

        <Questionnaire.Item name='audience' required className='space-y-2' invalid={Boolean(errors.audience)}>
          <Questionnaire.Title>Who will read the answer?</Questionnaire.Title>
          <Questionnaire.Description>Public answers require complete context.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {AUDIENCE_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error>{errors.audience}</Questionnaire.Error>
        </Questionnaire.Item>

        <div className={questionnaireActionsClassName}>
          <Questionnaire.Previous className={questionnaireSecondaryButtonClassName} />
          <Questionnaire.Next className={questionnairePrimaryButtonClassName}>Next</Questionnaire.Next>
          <Questionnaire.Submit className={questionnairePrimaryButtonClassName}>Validate answers</Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {submitted ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Answers validated successfully.
        </p>
      ) : null}
    </div>
  )
}
