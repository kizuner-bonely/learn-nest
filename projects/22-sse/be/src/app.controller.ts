import { Observable } from 'rxjs'
import { exec } from 'child_process'
import { Controller, Sse } from '@nestjs/common'

@Controller()
export class AppController {
  @Sse('stream')
  stream() {
    return new Observable((observer) => {
      observer.next({ data: { msg: 'hh' } })

      setTimeout(() => {
        observer.next({ data: { msg: 'smq' } })
      }, 2000)

      setTimeout(() => {
        observer.next({ data: { msg: 'hh loves smq' } })
      }, 5000)
    })
  }

  @Sse('stream2')
  stream2() {
    const childProcess = exec('tail -f ./log')
    return new Observable((observer) => {
      childProcess.stdout.on('data', (msg) => {
        observer.next({ data: { msg: msg.toString() } })
      })
    })
  }
}