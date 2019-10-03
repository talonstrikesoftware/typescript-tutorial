import express, { Request, Response } from 'express';
//import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieSession({keys: ['somestringtoencryptsession']}))
//app.use(router);
app.use(AppRouter.getInstance());
// app.get('/', (req: Request, res: Response) => {
//     res.send(`
//         <div>
//             <h1> Hi There</h1>
//         </div>
//     `);
// });

app.listen(3000, () => {
    console.log('Listening on port 3000');
})