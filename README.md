# What is WebSockets?

> WebSockets are basically use for faster responses from the server to the client .It makes an API establishing with "socket" connections between a web browser and a server. It enables persistent connection between the client and the server and both parties can start sending data at any time. When you chat with someone , you are sending sending a request to the server and for smooth and faster request sending webSockets are use . Another simple example for webSockets would be share market price update on your phone , the share market price usually change alot and updating every value and putting to the database may take a certain amount of time every time , that's why websockets can be used for updating the value faster and in a smooth way. WebSockets also give client great and faster experience of the website.

> I made the backend with my own configuration of redis and mongodb. You can locally run the backend and can also follow the localhost link - http://localhost:8080 , where you will see the functionality running of a Todo app and also whatever you are adding there , will be saved to my redis cache data and if the cache data length becomes more than 50 , the data will be saved to my mongodb atlas and the cache will be flush out. Todo List which you will see in the frontend is coming from the /fetchAllTasks route.

## Built With

- Typescript
- Node.js
- Express
- Socket.io
- Mongo DB
- Redis

## Screenshots
   ## ADD TO DO Page
![App Screenshot](https://i.ibb.co/PQmwwTW/todo-page.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/gucci1909/backend_task_umang_arora.git
```

Go to the project directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node dist/index.js
```



### Prerequisites
Typescript, Nodejs, Express, Mongo DB, Api, Socket.io.

### Setup
VS code,
 GitHub, Mongo DB, Redis 


## Author

👤 **Umang Arora**

- GitHub: [@gucci1909](https://github.com/gucci1909)
