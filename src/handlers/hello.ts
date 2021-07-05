import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { commonMiddleware } from '../lib/middlewares/commonMiddleware'
import { HelloService } from '../services/HelloService'
import createError from 'http-errors'

async function hello (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  try {
    const service = new HelloService()
    const hello = service.execute()
    const body = {
      message: hello,
      input: event
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
