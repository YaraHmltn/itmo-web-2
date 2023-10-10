import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { FrogsService } from './frogs.service';
import { CreateFrogDto } from './dto/create-frog.dto';
import { UpdateFrogDto } from './dto/update-frog.dto';
import {ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {FrogEntity} from "./entities/frog.entity";
@Controller('frogs')
@ApiTags("frogs")
export class FrogsController {
  constructor(private readonly frogsService: FrogsService) {}
  /**
   * Register new Frog in a system
   * @param createFrogDto value to inject
   * @returns created Frog
   */
  @ApiCreatedResponse({
    description: "Frog registered successfully"
  })
  @ApiBadRequestResponse({
    description: "Incorrect arguments to register Frog"
  })
  @ApiNotFoundResponse({
    description: "Nonexistent Frog"
  })
  @Post()
  create(@Body() createFrogDto: CreateFrogDto) {
    return this.frogsService.create(createFrogDto);
  }
  /**
   * Find all Frogs
   * @return array of registered Frogs
   */
  @ApiOkResponse({
    description: "All Frogs have been found",
    type: [FrogEntity]
  })
  @ApiNotFoundResponse({
    description: "No Frogs in the system"
  })
  @Get()
  findAll() {
    return this.frogsService.findAll();
  }
  /**
   * Find Frog by id
   * @param id unique identification number
   * @returns registered Frog
   */
  @ApiOkResponse({
    description: "Frog has been found",
    type: FrogEntity
  })
  @ApiBadRequestResponse({
    description: "Incorrect request arguments"
  })
  @ApiNotFoundResponse({
    description: "Nonexistent Frog"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frogsService.findOne(+id);
  }
  /**
   * Update some Frog's info
   * @param id unique identification number
   * @param updateFrogDto value to inject
   * @returns updated Frog
   */
  @ApiOkResponse({
    description: "Frog updated successfully"
  })
  @ApiBadRequestResponse({
    description: "Incorrect request arguments"
  })
  @ApiNotFoundResponse({
    description: "Nonexistent User"
  })
  @Put(":id")
  update(@Param("id") id: number, @Body() updateFrogDto: UpdateFrogDto) {
    return this.frogsService.update(+id, updateFrogDto);
  }

  /**
   * Remove Frog
   * @param id unique identification number
   */
  @ApiOkResponse({
    description: "Frog removed successfully"
  })
  @ApiBadRequestResponse({
    description: "Incorrect request arguments"
  })
  @ApiNotFoundResponse({
    description: "Nonexistent User"
  })

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frogsService.remove(+id);
  }
}
