import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { commonMiddleware } from '../lib/middlewares/commonMiddleware'
import { HelloUsecase } from '../usecases/HelloUsecase'

async function hello (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  try {
    const usecase = new HelloUsecase()
    const result = usecase.execute()
    const body = {
      result: result,
      event: event
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(body)
    }
    return response
  } catch {
    const error = {
      statusCode: 500,
      body: 'Internal Server Error'
    }
    return error
  }
}

export const handler = commonMiddleware(hello)
