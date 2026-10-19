'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'

const SCOPE_CHOICES = [
  { value: 'target', label: 'Only the target component' },
  { value: 'component-tests', label: 'Component and related tests' },
  { value: 'complete-feature', label: 'The complete feature area' },
] as const

const VERIFICATION_CHOICES = [
  { value: 'targeted', label: 'Targeted checks' },
  { value: 'package', label: 'Package tests and typecheck' },
  { value: 'full', label: 'Full workspace verification' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireControlledNavigation() {
  const [item, setItem] = React.useState('scope')
  const [submitted, setSubmitted] = React.useState(false)

  return (
    <div className='w-full max-w-xl rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6'>
      <Questionnaire.Root
        item={item}
        onItemChange={setItem}
        items={[
          { name: 'scope', required: true, choices: SCOPE_CHOICES },
          { name: 'verification', required: true, choices: VERIFICATION_CHOICES },
        ]}
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
        }}
        className='gap-5'
      >
        <Questionnaire.Progress />

        <Questionnaire.Item name='scope' required className='space-y-2'>
          <Questionnaire.Title>What may the agent change?</Questionnaire.Title>
          <Questionnaire.Description>
            The host stores the active checkpoint while Questionnaire navigates.
          </Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {SCOPE_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='verification' required className='space-y-2'>
          <Questionnaire.Title>Which verification level should it use?</Questionnaire.Title>
          <Questionnaire.Description>Choose the verification depth.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {VERIFICATION_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <div className='flex items-center justify-end gap-2'>
          <Questionnaire.Previous />
          <Questionnaire.Next>Next</Questionnaire.Next>
          <Questionnaire.Submit>Save workflow</Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {submitted ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Workflow saved.
        </p>
      ) : null}
    </div>
  )
}

