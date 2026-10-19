'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'

const REVIEW_CHOICES = [
  { value: 'api', label: 'Public API' },
  { value: 'tests', label: 'Test coverage' },
] as const

export function QuestionnaireAnswerShortcuts() {
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null)

  return (
    <div className='w-full max-w-xl rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6'>
      <Questionnaire.Root
        shortcuts='letters'
        items={[{ name: 'review', required: true, choices: REVIEW_CHOICES }]}
        onSubmit={(event) => {
          event.preventDefault()
          setSelectedAnswer(String(new FormData(event.currentTarget).get('review') ?? ''))
        }}
        className='gap-5'
      >
        <Questionnaire.Progress />
        <Questionnaire.Item name='review' required className='space-y-2'>
          <Questionnaire.Title>What should the agent review?</Questionnaire.Title>
          <Questionnaire.Description>
            Use the displayed shortcut or navigate with the keyboard.
          </Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {REVIEW_CHOICES.map((choice) => (
              <Questionnaire.Choice
                key={choice.value}
                value={choice.value}
                className='flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'
              >
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
                <Questionnaire.ChoiceShortcut className='ml-auto rounded border border-border px-1.5 py-0.5 text-xs text-muted-foreground' />
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>
        <div className='flex justify-end'>
          <Questionnaire.Submit className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90'>
            Confirm action
          </Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {selectedAnswer ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Selected: {REVIEW_CHOICES.find((choice) => choice.value === selectedAnswer)?.label ?? selectedAnswer}
        </p>
      ) : null}
    </div>
  )
}

