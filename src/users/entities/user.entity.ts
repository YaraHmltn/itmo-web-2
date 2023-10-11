import { ApiProperty } from "@nestjs/swagger";

export class UserEntity {
    @ApiProperty({
        description: "unique identification number",
        type: Number,
        example: 1
    })
    id: number;

    @ApiProperty({
        description: "name",
        type: String,
        example: "Yaroslava"
    })
    name: string;

    @ApiProperty({
        description: "email",
        type: String,
        example: "yarahmltn@gmail.com"
    })
    email: string;

    @ApiProperty({
        description: "password",
        type: String,
        example: "123456789"
    })
    password: string;

    @ApiProperty({
        description: "false - common user; true - admin",
        type: Boolean,
        default: false
    })
    is_admin: boolean;

    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        is_admin: boolean = false,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.is_admin = is_admin;
    }
}