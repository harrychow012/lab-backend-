import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nombre: string

  @Column({ unique: true })
  correo: string
}
