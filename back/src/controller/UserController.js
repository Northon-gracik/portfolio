
import { UserService } from "../service/UserService.js";

const userService = new UserService();

class UserController {

    async register(req, res) {
        try {
            const { user } = req.body;
            const userCreated = await userService.register(user);
            res.status(200).json(userCreated);
        } catch (err) {
            res.status(400).json({ "error": err.message });
        }

    }

    async authenticate(req, res) {
        try {
            const { email, password } = req.body;
            const userAuthenticated = await userService.authenticate(email, password);
            return res.json(userAuthenticated);
        } catch (err) {
            console.log(err);
            res.status(400).json({ "error": err.message });
        }

    }

    async findByToken(req, res) {
        const id = req.userId;
        const user = await userService.findById(id);
        res.json({ user });
    }

    async registerAddress(req, res) {
        try {
            const id = req.userId;
            const { address } = req.body;
            const user = await userService.registerAddress(id, address);
            res.json({ user });
        } catch (err) {
            res.status(400).json({ "error": err.message });
        }
    }
}

export { UserController }