import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface AuthModel extends Base {}

export class UserModel extends TimeStamps {
    @prop({ unique: true })
    email: string;

    @prop()
    hash: string;
}
