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

    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}