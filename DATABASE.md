# Switching to MySQL in Strapi

To use MySQL instead of SQLite (default), follow these steps:

1. **Install MySQL Client:**
   ```bash
   npm install mysql2
   ```

2. **Update Environment Variables:**
   Update your `.env` file with the following:
   ```env
   DATABASE_CLIENT=mysql
   DATABASE_HOST=127.0.0.1
   DATABASE_PORT=3306
   DATABASE_NAME=strapi_db
   DATABASE_USERNAME=root
   DATABASE_PASSWORD=your_password
   DATABASE_SSL=false
   ```

3. **Database Configuration:**
   Strapi will automatically use these variables if you check `config/database.ts`. Ensure the configuration matches the expected environment variables.

4. **Restart Strapi:**
   ```bash
   npm run develop
   ```
