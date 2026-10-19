'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'
import {
  questionnaireActionsClassName,
  questionnaireCardClassName,
  questionnairePrimaryButtonClassName,
  questionnaireSecondaryButtonClassName,
} from './styles'

const CHANGE_SIZE_CHOICES = [
  { value: 'small', label: 'Small patch' },
  { value: 'feature', label: 'Feature-sized change' },
  { value: 'cross-package', label: 'Cross-package change' },
] as const

const COMMIT_CHOICES = [
  { value: 'single', label: 'Single commit' },
  { value: 'logical', label: 'Logical commits' },
  { value: 'squash', label: 'Squash before review' },
] as const

const TEST_CHOICES = [
  { value: 'targeted', label: 'Targeted checks' },
  { value: 'package', label: 'Package suite' },
  { value: 'workspace', label: 'Full workspace' },
] as const

const DELIVERY_CHOICES = [
  { value: 'patch', label: 'Patch only' },
  { value: 'local', label: 'Committed locally' },
  { value: 'review', label: 'Push a review branch' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireCustomProgress() {
  const [completed, setCompleted] = React.useState(false)

  return (
    <div className={questionnaireCardClassName}>
      <Questionnaire.Root
        onSubmit={(event) => {
          event.preventDefault()
          setCompleted(true)
        }}
        className='gap-5'
      >
        <Questionnaire.Progress
          aria-label='Workflow progress'
          render={(props, state) => (
            <output {...props} className='text-sm font-semibold text-foreground'>
              Checkpoint {state.current} of {state.total}
            </output>
          )}
        />

        <Questionnaire.Item name='change-size' required className='space-y-2'>
          <Questionnaire.Title>How large is the change?</Questionnaire.Title>
          <Questionnaire.Description>Choose the scope of the implementation.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {CHANGE_SIZE_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='commits' required className='space-y-2'>
          <Questionnaire.Title>How should commits be organized?</Questionnaire.Title>
          <Questionnaire.Description>Choose the preferred commit structure.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {COMMIT_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='tests' required className='space-y-2'>
          <Questionnaire.Title>Which tests should run?</Questionnaire.Title>
          <Questionnaire.Description>Select the verification depth for the change.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {TEST_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <Questionnaire.Item name='delivery' required className='space-y-2'>
          <Questionnaire.Title>How should the work be delivered?</Questionnaire.Title>
          <Questionnaire.Description>Choose the handoff format for this change.</Questionnaire.Description>
          <Questionnaire.Choices className='mt-4 grid gap-2'>
            {DELIVERY_CHOICES.map((choice) => (
              <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
              </Questionnaire.Choice>
            ))}
          </Questionnaire.Choices>
          <Questionnaire.Error />
        </Questionnaire.Item>

        <div className={questionnaireActionsClassName}>
          <Questionnaire.Previous className={questionnaireSecondaryButtonClassName} />
          <Questionnaire.Next className={questionnairePrimaryButtonClassName}>Next</Questionnaire.Next>
          <Questionnaire.Submit className={questionnairePrimaryButtonClassName}>Finish plan</Questionnaire.Submit>
        </div>
      </Questionnaire.Root>

      {completed ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Workflow plan completed.
        </p>
      ) : null}
    </div>
  )
}
