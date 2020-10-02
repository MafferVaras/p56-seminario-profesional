const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://mvaras:ups2020@cluster0.qv5rt.mongodb.net/<dbname>?retryWrites=true&w=majority',
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files',
}

module.exports = config