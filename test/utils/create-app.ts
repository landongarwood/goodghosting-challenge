import { ConfigModule } from "@nestjs/config"
import { Test, TestingModuleBuilder } from "@nestjs/testing"
import configuration from "../../src/config/configuration"

export const createTestingApp = (controllers, providers): TestingModuleBuilder => {
    return Test.createTestingModule({
        imports: [
          ConfigModule.forRoot({
            load: [configuration],
            envFilePath: '.env',
          }),
        ],
        controllers: [...controllers],
        providers: [...providers],
    })
}