import { users } from "./create.js";

const get = async (req, res) => {
    res.status(200).json({
        message: "Users fetched successfully",
        data: users
    });
}

export default get;