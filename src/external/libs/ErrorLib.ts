import { APIGatewayProxyResult } from 'aws-lambda'
import { getErrorMessage } from '../../enums/errorsMessages'


export const ErrorLib = {
  format_ (exception: Error): APIGatewayProxyResult {
    const areErrorHandled = exception.message.includes('areErrorHandled')
    if (areErrorHandled) {
      const error = JSON.parse(exception.message)
      return { statusCode: error.statusCode, body: error.body }
    }

    const internalServerError = getErrorMessage(1000)
    return { 
      statusCode: internalServerError[0], 
      body: JSON.stringify({ 
        message: internalServerError[1], 
        stackTrace: exception.stack 
      }) 
    }
  },

  generate_ (errorNumber: number): Error {
    let error = getErrorMessage(errorNumber)
    if (!error) {
      error = getErrorMessage(1000)
    }
    const errorResponse = {
      statusCode: error[0],
      body: JSON.stringify({ 
        message: error[1], 
        stackTrace: '' 
      }),
      areErrorHandled: true
    }
    return new Error(JSON.stringify(errorResponse))
  }
}
