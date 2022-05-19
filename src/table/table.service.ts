import { Injectable } from "@nestjs/common";

@Injectable({

})
export class TableService{
  findAll() {
    return 'Search for all tables';
  }
  create() {
    return 'Create a table';
  }

}
