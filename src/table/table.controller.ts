import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateTableDto } from "./dto/create-table.dto";
import { UpdateTableDto } from "./dto/update-table.dto";
import { Table } from "./entities/table.entity";
import { TableService } from "./table.service";

@ApiTags('Table')
@Controller('table')
export class TableController {
  constructor( private readonly tableService: TableService) {}

  @Get()
  @ApiOperation({
    summary: 'List all tables'
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'List one table'
  })
  findOne(@Param('id')id: string): Promise<Table> {
    return this.tableService.findOne(id)
  }

  @Post()
  @ApiOperation({
    summary: 'Create a table'
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a table for id'
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
    return this.tableService.update(id, dto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a table for id'
  })
  delete(@Param('id') id: string) {
    this.tableService.delete(id)
  }
}
