import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { HelloUsecase } from '../usecases/HelloUsecase'

export async function handler (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  try {
    const usecase = new HelloUsecase()
    const result = usecase.execute()
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        result: result,
        event: event
      })
    }
    return response
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        result: error
      })
    }
  }
}
