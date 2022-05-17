import { users } from "../../../../users";

export default function handler(req, res) {
    const {id} = req.query;

    if(req.method === 'GET')
    {
        const user = users.find(user => user.id == parseInt(id));
        res.status(200).json(user);
    }
    else if(req.method === 'PUT')
    {
        const editUser = users.find((user) => user.id == parseInt(id));
        const indexNo = users.findIndex((user) => user.id == parseInt(id));

        const user = req.body.user
        const newUser = {
            id: Date.now(),
            name: user,
        };

        users.push(newUser);
        res.status(201).json(newUser);
        
        res.status(200).json(editUser);
    }
    
}