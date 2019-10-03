import { Response, RequestWithBody, NextFunction } from 'express';
import { get, controller, use, bodyValidator, post} from "./decorators";


function logger(req: Request, res: Response, next: NextFunction) {
    console.log('Request was made');
    next();
}

@controller('/')
class LoginController {

    @get('/')
    add(a: number, b: number): number {
        return a + b;
    }
    
    @get('/login')
    @use(logger)
    getLogin(req: Request, res: Response):void {
        res.send(`
            <form method="POST">
                <div>
                    <label> Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <button>Submit</button>
            </form>
        `);
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: RequestWithBody, res: Response) {
        const { email, password } = req.body;
    
        if (email && password && email == 'hi@hi.com' && password === 'password') {
            req.session = { loggedIn: true};
            res.redirect('/');
        } 
        else {
    
            res.send('Invalid email or password');
        }
    }


    @get('/logout')
    getLogout(req: RequestWithBody, res: Response) {
        req.session = undefined;
        res.redirect('/');
    }
    
}