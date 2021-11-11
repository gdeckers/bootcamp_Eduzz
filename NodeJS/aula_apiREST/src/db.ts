import { Pool } from "pg";

const connectionString = 'postgres://ihbcwygu:azWzJLNYGR7h-KTiN3M-iRpdpeJDmZsj@motty.db.elephantsql.com/ihbcwygu';
const db = new Pool({connectionString});

export default db;