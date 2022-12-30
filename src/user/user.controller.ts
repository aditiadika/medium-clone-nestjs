import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any>{
        return this.userService.createUser(createUserDto)
    }
}
