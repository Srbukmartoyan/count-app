const express = require("express");
const app = express();
const router = require('./routes/items.js');
const { errorHandler } = require('./middleware/errorHandler.js')
const PORT = process.env.PORT || 3000;

const db = require('./models'); //Item models will be created (tables)
const { Item } = require('./models');

const start = async () => {
    try {
        await db.sequelize.sync();  // ete database-i modely posvi, databasey chi poxvi (hak depqum kam force kam alter)
        
        const existingItemsCount = await Item.count();
        
        if (existingItemsCount === 0) {
            await Item.bulkCreate([
                { number: 0 },
                { number: 0 },
                { number: 0 },
                { number: 0 },
                { number: 0 }
            ]).then((res) => {
                console.log(res.length + 'Initial items are created successfully.');
            });
        } else {
            console.log('Database already contains items. Skipping initialization.');
        }
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error.message);
    }
};


app.use('/', router);
app.use(errorHandler);

start();

