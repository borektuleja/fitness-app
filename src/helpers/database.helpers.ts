import mysql, { type QueryError } from "mysql2/promise";

const MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME;
const MYSQL_USERNAME = process.env.MYSQL_USERNAME;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

if (!(MYSQL_HOSTNAME && MYSQL_USERNAME && MYSQL_DATABASE)) {
  throw new Error("Define all MySQL credentials.");
}

export const pool = mysql.createPool({
  host: MYSQL_HOSTNAME,
  user: MYSQL_USERNAME,
  database: MYSQL_DATABASE,
});

interface QueryErrorResponse {
  duplicateEntry?: string;
}

export function processQueryError(error: QueryError, response?: QueryErrorResponse): string {
  switch (error.code) {
    case "ECONNREFUSED":
      return "Připojení k databázi se nezdařilo.";
    case "ER_DUP_ENTRY":
      return response?.duplicateEntry ?? "Duplicitní hodnota.";
    default:
      return "Neznámá chyba databáze.";
  }
}
