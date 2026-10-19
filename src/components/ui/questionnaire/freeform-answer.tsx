'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'

import { cn } from '@/lib/utils'

const REFACTOR_CHOICES = [
  { value: 'smallest-safe-change', label: 'Make the smallest safe change' },
  { value: 'one-module-at-a-time', label: 'Refactor one module at a time' },
  { value: 'replace-completely', label: 'Replace the implementation completely' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireFreeformAnswer() {
  const [submittedAnswer, setSubmittedAnswer] = React.useState<string | null>(null)

  return (
    <div className='w-full max-w-xl rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6'>
      <Questionnaire.Root
        items={[
          {
            name: 'approach',
            required: true,
            choices: REFACTOR_CHOICES,
          },
        ]}
        onSubmit={(event) => {
          event.preventDefault()
          const formData = new FormData(event.currentTarget)
          setSubmittedAnswer(String(formData.get('approach') ?? ''))
        }}
        className='gap-5'
      >
        <Questionnaire.Progress />

        <Questionnaire.Item name='approach' required className='space-y-2'>
          <Questionnaire.Title>
            How should the agent approach this refactor?
          </Questionnaire.Title>
          <Questionnaire.Description>
            Choose a strategy or write a more specific instruction.
          </Questionnaire.Description>

          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {REFACTOR_CHOICES.map((choice) => (
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

            <Questionnaire.Input
              aria-label='Describe another approach'
              placeholder='Describe another approach…'
              className={cn(
                'h-10 rounded-md border border-input bg-background px-3 text-sm outline-none',
                'placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30'
              )}
            />
          </Questionnaire.Choices>

          <Questionnaire.Error />
        </Questionnaire.Item>

        <div className='flex justify-end'>
          <Questionnaire.Submit className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90'>
            Use this approach
          </Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {submittedAnswer ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Selected: {REFACTOR_CHOICES.find((choice) => choice.value === submittedAnswer)?.label ?? submittedAnswer}
        </p>
      ) : null}
    </div>
  )
}

