import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface User {
  id?: string;
  phone: string;
  name?: string;
  password: string;
  banned?: boolean;
  banReason?: string;
}

@Entity('users')
export class UsersEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: false })
  banned: boolean;

  @Column({ nullable: true })
  banReason: string;
}
