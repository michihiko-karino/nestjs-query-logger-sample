import "reflect-metadata";
import { createConnection } from "typeorm";
import { Skill } from "./skill.master";
import { User } from "./user.entity";

// npx ts-node ./src/entities/test.ts 

createConnection().then(async connection => {
  const skill = new Skill();
  skill.name = 'TypeORM';

  await connection.manager.save(skill);

  const user = new User();
  user.name = 'karino';
  user.email = 'email';
  user.skills = [skill];

  await connection.manager.save(user);

  const result = await connection.createQueryBuilder()
    .select('users')
    .from(User, 'users')
    .leftJoinAndSelect('users.skills', 'skill')
    .orderBy('id', 'DESC')
    .getOne();

  console.log(result);
}).catch(error => console.log(error));
