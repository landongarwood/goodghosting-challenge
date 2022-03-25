import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule, OpenAPIObject } from '@nestjs/swagger'

export const initSwagger = (app: INestApplication): OpenAPIObject => {
  const config = new DocumentBuilder()
    .setTitle('GoodGhosting API Document')
    .setDescription('GoodGhosting API Document')
    .addServer(process.env.API_URL)
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  return document
}
