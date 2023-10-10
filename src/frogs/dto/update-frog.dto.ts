import { PartialType } from '@nestjs/mapped-types';
import { CreateFrogDto } from './create-frog.dto';
import { IsNotEmpty } from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateFrogDto extends PartialType(CreateFrogDto) {
    @IsNotEmpty()
    @ApiProperty({
        description: "variety",
        type: String,
        example: "Остромордая"
    })
    variety: string;

    constructor(variety: string) {
        super();
        this.variety = variety;
    }
}

