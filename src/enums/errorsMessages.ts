import * as data from '../external/support/enums/errors_messages.json'

export const getErrorMessage = (errorNumber: number) => {
  const errorsMessages = data as any
  return errorsMessages[errorNumber]
}
