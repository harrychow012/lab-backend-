import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsuariosService } from './services/usuarios.service.js'
import { UsuariosController } from './controller/usuarios.controller.js'
import { Usuario } from './entities/usuario.entity.js'

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
