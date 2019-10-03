import { Response, RequestWithBody, NextFunction } from 'express';
import { get, controller, use, bodyValidator, post} from "./decorators";

function requireAuth(req: Request, res: Response, next:NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403);
    res.send('Not permitted');
}

@controller('')
class RootControllers {

    @get('/')
    getRoot(req: RequestWithBody, res: Response) {
        if (req.session && req.session.loggedIn) {
            res.send(`
                <div>
                <div>Your are logged in</div>
                <a href="/auth/logout">Logout</a>
                </div>
            `)
        }
        else {
            res.send(`
                <div>
                <div>Your are NOT logged in</div>
                <a href="/auth/login">Login</a>
                </div>
            `)
    
        }
    }
    
    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send('Welcome to protected route user');
    }
}