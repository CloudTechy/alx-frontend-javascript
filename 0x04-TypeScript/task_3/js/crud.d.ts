import { RowId, RowElement } from './interface';


export function insertRow(row: RowElement): RowId;
export function deleteRow(rowId: RowId): boolean;
export function updateRow(rowId: RowId, row: RowElement): RowId;
