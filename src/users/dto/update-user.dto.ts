import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        description: "email",
        type: String,
        example: "yarahmltn@gmail.com"
    })
    email: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "password",
        type: String,
        example: "123456789"
    })
    password: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "false - common user; true - admin",
        type: Boolean,
        default: false
    })
    is_admin: boolean;

    constructor(name: string, email: string, password: string, is_admin: boolean = false) {
        super();
        this.name = name;
        this.email = email;
        this.password = password;
        this.is_admin = is_admin;
    }

}