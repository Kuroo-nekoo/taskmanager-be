import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { TasksModule } from './tasks/tasks.module';
import { ListsModule } from './lists/lists.module';

interface EnvironmentVariables {
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_USERNAME: string;
  DATABASE_PASSWORD: string;
  DATABASE_NAME: string;
}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService<EnvironmentVariables>) {
        return {
          type: 'mysql',
          host: configService.get('DATABASE_HOST', { infer: true }),
          port: configService.get('DATABASE_PORT', { infer: true }),
          username: configService.get('DATABASE_USERNAME', { infer: true }),
          password: configService.get('DATABASE_PASSWORD', { infer: true }),
          database: configService.get('DATABASE_NAME', { infer: true }),
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    TasksModule,
    CategoriesModule,
    ListsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
