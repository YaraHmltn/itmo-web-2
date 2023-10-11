import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags
} from "@nestjs/swagger";
import { UserEntity } from "./entities/user.entity";

@Controller("users")
@ApiTags("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  /**
   * Register new User in a system
   * @param createUserDto value to inject
   * @returns created User
   */
  @ApiCreatedResponse({
    description: "User registered successfully"
  })
  @ApiBadRequestResponse({
    description: "Incorrect arguments to register User"
  })
  @ApiNotFoundResponse({
    description: "Nonexistent User"
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  /**
   * Find all Users
   * @return array of registered Users
   */
  @ApiOkResponse({
    description: "All Users have been found",
    type: [UserEntity]
  })
  @ApiNotFoundResponse({
    description: "No Users in the system"
  })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * Find User by id
   * @param id unique identification number
   * @returns registered User
   */
  @ApiOkResponse({
    description: "User has been found",
    type: UserEntity
  })
  @ApiBadRequestResponse({
    description: "Incorrect request arguments"
  })
  @ApiNotFoundResponse({
    description: "Nonexistent User"
  })
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.usersService.findOne(+id);
  }

  /**
   * Update some User's info
   * @param id unique identification number
   * @param updateUserDto value to inject
   * @returns updated User
   */
  @ApiOkResponse({
    description: "User updated successfully"
  })
  @ApiBadRequestResponse({
    description: "Incorrect request arguments"
  })
  @ApiNotFoundResponse({
    description: "Nonexistent User"
  })
  @Put(":id")
  update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  /**
   * Remove User
   * @param id unique identification number
   */
  @ApiOkResponse({
    description: "User removed successfully"
  })
  @ApiBadRequestResponse({
    description: "Incorrect request arguments"
  })
  @ApiNotFoundResponse({
    description: "Nonexistent User"
  })
  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.usersService.remove(+id);
  }
}