import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateUsuarioDto } from '../dto/create-usuario.dto.js'
import { UpdateUsuarioDto } from '../dto/update-usuario.dto.js'
import { Usuario } from '../entities/usuario.entity.js'

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(createUsuarioDto)
    return this.usuarioRepository.save(usuario)
  }

  findAll() {
    return this.usuarioRepository.find()
  }

  async findOne(id: number) {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
    })

    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`)
    }

    return usuario
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(id)

    Object.assign(usuario, updateUsuarioDto)

    return this.usuarioRepository.save(usuario)
  }

  async remove(id: number) {
    const usuario = await this.findOne(id)

    await this.usuarioRepository.remove(usuario)

    return {
      message: `Usuario con id ${id} eliminado correctamente`,
    }
  }
}
