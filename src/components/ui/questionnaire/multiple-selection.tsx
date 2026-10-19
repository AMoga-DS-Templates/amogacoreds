'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'

const CONTEXT_CHOICES = [
  { value: 'relevant-source-files', label: 'Relevant source files' },
  { value: 'existing-tests', label: 'Existing tests' },
  { value: 'architecture-documentation', label: 'Architecture documentation' },
  { value: 'recent-commit-history', label: 'Recent commit history' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireMultipleSelection() {
  const [selectedAnswers, setSelectedAnswers] = React.useState<string[]>([])

  return (
    <div className='w-full max-w-xl rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6'>
      <Questionnaire.Root
        items={[
          {
            name: 'context',
            required: true,
            choices: CONTEXT_CHOICES,
          },
        ]}
        onSubmit={(event) => {
          event.preventDefault()
          const formData = new FormData(event.currentTarget)
          setSelectedAnswers(formData.getAll('context').map(String))
        }}
        className='gap-5'
      >
        <Questionnaire.Progress />

        <Questionnaire.Item name='context' multiple required className='space-y-2'>
          <Questionnaire.Title>
            What context should the agent inspect?
          </Questionnaire.Title>
          <Questionnaire.Description>
            Select every source that may affect the implementation.
          </Questionnaire.Description>

          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {CONTEXT_CHOICES.map((choice) => (
              <Questionnaire.Choice
                key={choice.value}
                value={choice.value}
                className={choiceClassName}
              >
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>
                  {choice.label}
                </Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>

          <Questionnaire.Error />
        </Questionnaire.Item>

        <div className='flex justify-end'>
          <Questionnaire.Submit className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90'>
            Share context
          </Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {selectedAnswers.length > 0 ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Selected:{' '}
          {selectedAnswers
            .map(
              (answer) =>
                CONTEXT_CHOICES.find((choice) => choice.value === answer)?.label ?? answer
            )
            .join(', ')}
        </p>
      ) : null}
    </div>
  )
}

