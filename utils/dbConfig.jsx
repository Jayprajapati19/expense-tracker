import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"
const sql = neon("postgresql://expense_owner:ZmpaCEjPo69t@ep-black-art-a5s59qy9.us-east-2.aws.neon.tech/expense?sslmode=require");
export const db = drizzle(sql, { schema });
