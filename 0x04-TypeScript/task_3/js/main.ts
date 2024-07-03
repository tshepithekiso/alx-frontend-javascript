/// <reference path="js/crud.d.ts" />
import { RowID, RowElement } from './js/interface';
import * as CRUD from 'crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${JSON.stringify(row)}`);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);
