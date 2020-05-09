import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'skills',
})
export class Skill {
  @PrimaryGeneratedColumn()
  code: number;

  @Column({ length: 32 })
  name: string;
}
