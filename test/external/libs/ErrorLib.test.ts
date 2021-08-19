import { ErrorLib } from '../../../src/external/libs/ErrorLib'

describe('error lib', () => {
  it('should return formatted error', () => {
    try {
      throw ErrorLib.generate_(2001)
    } catch (error) {
      const parsedError = JSON.parse(error.message)
      const formattedError = ErrorLib.format_(error)
      expect(parsedError.areErrorHandled).toEqual(true)
      expect(formattedError.statusCode).toEqual(422)
      expect(formattedError.body).toEqual('{"message":"Invalid field","stackTrace":""}')
    }
  })

  it('should format any error', () => {
    try {
      throw new Error('Unhandled error')
    } catch (error) {
      const formattedError = ErrorLib.format_(error)
      expect(error.message).toEqual('Unhandled error')
      expect(formattedError.statusCode).toEqual(500)
      expect(formattedError.body.includes('message')).toEqual(true)
      expect(formattedError.body.includes('stackTrace')).toEqual(true)
    }
  })

  it('should return internal error if code does not exist', () => {
    try {
      throw ErrorLib.generate_(9999)
    } catch (error) {
      expect(error.message.includes('Internal server error')).toEqual(true)
    }
  })
})
