import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty({
        description: "name",
        type: String,
        example: "Yaroslava"
    })
    name: string;

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

}