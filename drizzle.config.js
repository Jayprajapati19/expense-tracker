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
        url: "postgresql://neondb_owner:Y7NLoMhab2iC@ep-long-tooth-a5ff6i5x.us-east-2.aws.neon.tech/neondb?sslmode=require"
    }
};
