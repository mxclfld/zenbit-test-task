# zenbit-test-task

This is a Test task for Zenbit Tech. It is a reach out form with backend.


To start this application manually follow these instructions:

`git clone https://github.com/mxclfld/zenbit-test-task.git`

`cd zenbit-test-task`

`cd server`

There, you need to create .env file and fill in DATABASE_URL to connect to.

`touch .env`
`echo "DATABASE_URL = \"postgresql://janedoe:mypassword@localhost:5432/mydb?schema=sample\"" > .env`

Where `janedoe` - username for Postgres user, `mypassword` - password for it, `mydb` - database to work with.

Then, edit docker-compose.yml file so that `POSTGRES_USER`, `POSTGRES_PASSWORD` are the same as those you specified in DATABASE_URL.

Then, both in `server` and `client` directories, run `yarn` or `npm install` to install dependencies.

To run front-end use `yarn dev` and to run backend run `yarn start:dev`.

# Application frontend
![image](https://user-images.githubusercontent.com/82830327/219713560-e70db557-02a4-4a93-89f7-68e07c22eb81.png)
