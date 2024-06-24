// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//     dialect: "postgresql",
//     driver: "pg",
//     schema: "./utils/schema.jsx",
//     dbCredentials: {
//         connectionString: "process.env.DATABASE_URL"
//     }
// })





export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    // driver: 'pg',
    dbCredentials: {
        url: "postgresql://expense_owner:ZmpaCEjPo69t@ep-black-art-a5s59qy9.us-east-2.aws.neon.tech/expense?sslmode=require"
    }
};
