import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { Permission } from './permission.entity'

@Entity({ name: 'roles' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true, length: 20 })
  name: string

  @ManyToMany(() => Permission)
  @JoinTable({ name: 'role_permissions' })
  permissions: Permission[]
}
