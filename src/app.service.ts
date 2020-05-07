import { Injectable } from '@nestjs/common';
import { createQueryBuilder } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  async getHello(): Promise<User> {
    return await createQueryBuilder()
      .select('users')
      .from(User, 'users')
      .where('users.name = :name', { name: '?' })
      .orWhere('users.id = :id', { id: 1 })
      .getOne();
  }

  async badQuery(): Promise<User> {
    return await createQueryBuilder()
      .select('users')
      .from(User, 'users')
      .where('users.name = "?"')
      .orWhere('users.id = :id', { id: 1 })
      .getOne()
  }
}
