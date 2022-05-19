import { Injectable } from "@nestjs/common";
import { CreateTableDto } from "./dto/create-table.dto";
import { Table } from "./entities/table.entity";

@Injectable()
export class TableService{
  table: Table[] = [];
  findAll() {
    return 'Search for all tables';
  }
  create(createTableDto: CreateTableDto) {
    const table: Table = {id: 'random_id', ...createTableDto }

    this.table.push(table)
    return table;
  }

}
