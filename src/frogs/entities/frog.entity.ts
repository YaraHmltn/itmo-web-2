import { ApiProperty } from "@nestjs/swagger";

export class FrogEntity {
    @ApiProperty({
        description: "unique identification number",
        type: Number,
        example: 1
    })
    id: number;

    @ApiProperty({
        description: "name",
        type: String,
        example: "Пиксель"
    })
    name: string;

    @ApiProperty({
        description: "age",
        type: Number,
        example: 3
    })
    age: number;

    @ApiProperty({
        description: "variety",
        type: String,
        example: "Остромордая"
    })
    variety: string;

    constructor(
        id: number,
        name: string,
        age: number,
        variety: string,

    ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.variety = variety;

    }
}
