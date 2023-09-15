import { Database as DbTypes } from "@/lib/db.types";

declare global {
  type Database = DbTypes;
}
