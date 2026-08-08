export default function auth(req, res, next) {
    const password = req.query.password;
    if (password !== "1234") {
        return res.status(401).json(
            {
                message: "You are Unauthorized To access this System"

            });
    }
    next();
}
