/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { Dish } from './dish.entity/dish.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryModule } from '../cloudinary.module';
@Module({
  imports: [TypeOrmModule.forFeature([Dish]), CloudinaryModule],
  providers: [DishService],
  controllers: [DishController],
})
export class DishModule {}
