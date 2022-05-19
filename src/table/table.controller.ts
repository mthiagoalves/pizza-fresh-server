import { Controller, Get, Post } from "@nestjs/common";

@Controller('table')
export class TableController {
  @Get()
  findAll() {
    return 'Search for all tables'
  }

  @Post()
  create() {
    return 'Create a table'
  }
}
