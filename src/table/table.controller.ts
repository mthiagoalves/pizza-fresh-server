import { Controller, Get } from "@nestjs/common";

@Controller('table')
export class TableController {
  @Get()
  findAll() {
    return 'Search for all tables'
  }
}
