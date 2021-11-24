import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export default class User {
  @PrimaryColumn()
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
