import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty } from "class-validator";

export class CreateFrogDto {
    @IsNotEmpty()
    @ApiProperty({
        description: "name",
        type: String,
        example: "Roma"
    })
    name: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "variety",
        type: String,
        example: "Остромордая"
    })
    variety: string;

    constructor(name: string, variety: string) {
        this.name = name;
        this.variety = variety;

    }
}

