# Create a DB & Setup a Simple API
1. Create a DB using postgres
- Use PSQL => CREATE DATABASE TestDB;
- Or use PGADMIN => GUI

2. Setup an ERD diagram for the Database
- [My ERD Diagram link](https://lucid.app/lucidchart/1cc26405-1a17-411d-9057-af84d31816e9/edit?viewport_loc=218%2C-76%2C1582%2C679%2C0_0&invitationId=inv_a41321f0-7aa1-4c70-9291-40258e332740)

3. Use Prisma to interact with the DB
- Visit this link [Prisma ORM](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgresql)

Prisma has 3 components;
- Prisma Client
- Prisma Studio
- Prisma CLI

- Install Prisma ```npm install prisma --save-dev```
- Invoke the Prisma ```npx prisma init``` this creates; a Prisma folder & .env file
- Install the Prisma VS Code extension for syntax highlighting, formatting, auto-completion.
- Connect  to a DATABASE ```postgresql://<db-username>:<db-pass>@localhost:5432/<db-name>?schema=public```
- Define your DB Models in the ```schema.prisma``` file in the Prisma folder
- Run the Schema to create migration file which we run against our DB using ```npx prisma migrate dev```
- Check your DB contents using the ```npx prisma studio``` command

4. Create API routes to handle POST, GET, UPDATE & DELETE Requests
- Create a Prisma Client

5. Use POSTMAN to Test the API
- Download from [Postman Download Link](https://www.postman.com/downloads/)

6. Deploy the API on render (For another session)