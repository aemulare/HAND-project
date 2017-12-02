# HAND Project - Help After Natural Disasters


## Installation for develeopment (MAC OS)

### POSTGRES

1. Install PostgreSQL (if you don't have it already) ```brew install postgresql```
2. Start Postgres running ```pg_ctl -D /usr/local/var/postgres start```
3. (optional) To make Postgres start every time your computer starts up ```brew services start postgresql```
4. Configure Postgres
    - Enter psql command line ```psql postgres```
    - Set the password for the default postgres account ```\password postgres```
    - Enter a command to see what users are installed ```\du```
    - Create new user with name **hand** and password **disaster**: ```CREATE ROLE hand WITH LOGIN PASSWORD 'disaster';```
    - Add the CREATEDB permission to our new user to allow them to create databases ```ALTER ROLE hand CREATEDB;```
    - See new user with right `Create DB` in the table of users: ```\du```
    - Quit psql ```\q```


### BUILDING APP

1. Open Terminal in folder where you want to clone this project
2. Run command ```git clone https://github.com/aemulare/HAND-project.git```
3. Change folder to **hand-app** ```cd HAND-project/hand-app```
4. Open the second Terminal tab in the same folder **hand-app**: Cmd + T


**In the first tab**
1. Change folder to server ```cd server```
2. Run ```yarn``` to build a server side (or ```npm install```)
3. Create a database with command ```sequelize db:create```
4. Run ```sequelize db:migrate``` to create database tables
5. Run ```sequelize db:seed:all``` to fill the database with mock and reference data
6. Run ```yarn server``` (or ```npm run server```) to start the back-end server (running on port 8000)

**In the second tab**
1. Change folder to client ```cd client```
2. Run ```yarn``` (or ```npm install```) to build a client side
3. Run ```yarn start``` (or ```npm start```) to start the front-end server (running on port 3000)
