/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import {crud } from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const rowId: RowID = crud.insertRow(row);

const UpdatedRow: RowElement = { age: 23, ...row };

crud.updateRow(rowId, UpdatedRow);
crud.deleteRow(rowId);