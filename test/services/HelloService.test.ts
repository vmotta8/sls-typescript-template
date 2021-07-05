import { HelloService } from '../../src/services/helloService'

describe('hello service', () => {
  it('should return hello string', () => {
    const service = new HelloService()
    const response = service.execute()
    expect(response).toBe('Hello!!')
  })
})
