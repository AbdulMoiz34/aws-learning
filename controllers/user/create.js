export const users = [];


const create = async (req, res) => {
    const { email, password } = req.body;

    users.push({ email, password });
    res.status(200).json({ message: "User created successfully" });
}

export default create;