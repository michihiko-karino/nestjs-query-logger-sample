import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Skill } from './skill.master';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  name: string;

  @Column({ length: 32 })
  email: string;

  @ManyToMany(type => Skill)
  @JoinTable()
  skills: Skill[];
}
