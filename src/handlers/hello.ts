import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { commonMiddleware } from '../lib/middlewares/commonMiddleware'
import { HelloUsecase } from '../usecases/HelloUsecase'
import createError from 'http-errors'

async function hello (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  try {
    const usecase = new HelloUsecase()
    const result = usecase.execute()
    const body = {
      result: result,
      event: event
    }
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  } catch (error) {
    console.log(error)
    throw new createError.InternalServerError(error)
  }
}

export const handler = commonMiddleware(hello)
