const app = require('./src/app');
const dotenv = require('dotenv');
const connectDB = require('./src/db/db');

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});