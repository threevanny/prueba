import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//import Routes
import indexRoutes from './routes/index.routes';
app.use('/', indexRoutes);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});