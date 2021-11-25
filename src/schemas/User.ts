import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';

@Entity('users')
export default class UserSchema {
  @ObjectIdColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  username!: string;

  @Column({ type: 'date' })
  birthdate!: Date;

  @Column()
  address!: string;

  @Column()
  addressNumber!: string;

  @Column()
  primaryPhone!: string;

  @Column()
  description!: string;

  @Column({ type: 'date' })
  createdAt!: Date;
}
