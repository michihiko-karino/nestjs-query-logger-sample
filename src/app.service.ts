import { Injectable } from '@nestjs/common';
import { createQueryBuilder } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    return await createQueryBuilder()
      .select('users')
      .from(User, 'users')
      .where('users.id = :id', { id: 1 })
      .getOne();
  }
}
