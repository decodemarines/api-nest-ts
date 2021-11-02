import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserModel } from './user.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { AuthDto } from './dto/auth.dto';
import { genSaltSync, hashSync, compare } from 'bcryptjs';
import { USER_NOT_FOUND_ERROR, WRONG_PASSWORD_ERROR } from './auth.constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>, private readonly jwtService: JwtService) {}
    async createUser(dto: AuthDto) {
        const salt = genSaltSync(10);
        const newUser = new this.userModel({
            email: dto.login,
            hash: hashSync(dto.password, salt),
        });
        return newUser.save();
    }
    async findUser(email: string) {
        return this.userModel.findOne({ email }).exec();
    }
    async validateUser(email: string, password: string): Promise<Pick<UserModel, 'email'>> {
        const user = await this.findUser(email);
        if (!user) {
            throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
        }
        const isCorrectPass = await compare(password, user.hash);
        if (!isCorrectPass) {
            throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
        }
        return { email: user.email };
    }
    async login(email: string) {
        const payload = { email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}