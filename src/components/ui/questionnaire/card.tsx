'use client'

import * as React from 'react'
import { Questionnaire } from '@shadcn/react/questionnaire'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  questionnairePrimaryButtonClassName,
  questionnaireSecondaryButtonClassName,
} from './styles'

const TASK_CHOICES = [
  { value: 'tests', label: 'Fix the failing tests' },
  { value: 'data', label: 'Refactor the data layer' },
  { value: 'guide', label: 'Update the integration guide' },
] as const

const HANDOFF_CHOICES = [
  { value: 'summary', label: 'Summary only' },
  { value: 'files', label: 'Summary and changed files' },
  { value: 'full', label: 'Full review handoff' },
] as const

const choiceClassName =
  'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-muted/50 data-[checked]:border-primary data-[checked]:bg-primary/5'

export function QuestionnaireCard() {
  const titleId = React.useId()
  const handoffTitleId = React.useId()
  const [created, setCreated] = React.useState(false)

  return (
    <div className='w-full max-w-xl'>
      <Questionnaire.Root
        onSubmit={(event) => {
          event.preventDefault()
          setCreated(true)
        }}
      >
        <Card className='overflow-hidden border-border/70 shadow-md'>
          <Questionnaire.Item aria-labelledby={titleId} name='task' required className='contents'>
            <CardHeader className='border-b bg-muted/20 pb-5'>
              <Questionnaire.Title id={titleId} render={<CardTitle className='text-lg' />}>
                What should the agent work on?
              </Questionnaire.Title>
              <Questionnaire.Description render={<CardDescription />}>
                Choose the task that should be handled next.
              </Questionnaire.Description>
              <CardAction>
                <Questionnaire.Progress />
              </CardAction>
            </CardHeader>
            <CardContent className='pt-6'>
              <Questionnaire.Choices className='grid gap-2'>
                {TASK_CHOICES.map((choice) => (
                  <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                    <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                    <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
                  </Questionnaire.Choice>
                ))}
              </Questionnaire.Choices>
              <Questionnaire.Error />
            </CardContent>
            <CardFooter className='justify-end gap-2 border-t !pt-4 pb-4'>
              <Questionnaire.Next className={questionnairePrimaryButtonClassName}>Next</Questionnaire.Next>
            </CardFooter>
          </Questionnaire.Item>

          <Questionnaire.Item aria-labelledby={handoffTitleId} name='handoff' required className='contents'>
            <CardHeader className='border-b bg-muted/20 pb-5'>
              <Questionnaire.Title id={handoffTitleId} render={<CardTitle className='text-lg' />}>
                What should the final handoff include?
              </Questionnaire.Title>
              <Questionnaire.Description render={<CardDescription />}>
                Pick the level of detail needed for review.
              </Questionnaire.Description>
              <CardAction>
                <Questionnaire.Progress />
              </CardAction>
            </CardHeader>
            <CardContent className='pt-6'>
              <Questionnaire.Choices className='grid gap-2'>
                {HANDOFF_CHOICES.map((choice) => (
                  <Questionnaire.Choice key={choice.value} value={choice.value} className={choiceClassName}>
                    <Questionnaire.ChoiceInput className='size-4 accent-primary' />
                    <Questionnaire.ChoiceLabel className='font-medium'>{choice.label}</Questionnaire.ChoiceLabel>
                  </Questionnaire.Choice>
                ))}
              </Questionnaire.Choices>
              <Questionnaire.Error />
            </CardContent>
            <CardFooter className='justify-end gap-2 border-t !pt-4 pb-4'>
              <Questionnaire.Previous className={questionnaireSecondaryButtonClassName} />
              <Questionnaire.Submit className={questionnairePrimaryButtonClassName}>Create task</Questionnaire.Submit>
            </CardFooter>
          </Questionnaire.Item>
        </Card>
      </Questionnaire.Root>

      {created ? (
        <p className='mt-4 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground'>
          Task created successfully.
        </p>
      ) : null}
    </div>
  )
}
