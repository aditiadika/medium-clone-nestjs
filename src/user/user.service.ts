import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>){}

    async createUser(createUserDto: CreateUserDto){
        const newUser = new UserEntity();
        Object.assign(newUser, createUserDto)
        return await this.userRepository.save(newUser)
    }
}
