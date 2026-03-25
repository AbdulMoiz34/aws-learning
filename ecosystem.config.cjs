module.exports = {
    apps: [
        {
            name: "app",
            script: "./index.js",
            instances: "max",
            autorestart: true,
            watch: false,
            cwd: "./",
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};