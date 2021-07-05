export class HelloService {
  private hello: string

  constructor () {
    this.hello = 'Hello!!'
  }

  execute () {
    return this.hello
  }
}
