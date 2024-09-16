import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //openapi doc
  const options = new DocumentBuilder()
    .setTitle('Rewardchain API')
    .setDescription('Rewardchain API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
