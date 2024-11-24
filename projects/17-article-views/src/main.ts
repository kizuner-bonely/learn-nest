import { NestFactory } from '@nestjs/core'
import * as session from 'express-session'

import { AppModule } from './app.module'

declare module 'express-session' {
  interface Session {
    user: { id: number; username: string }
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(session({ secret: 'hh', resave: false, saveUninitialized: false }))
  await app.listen(process.env.PORT ?? 3000)
}

bootstrap()