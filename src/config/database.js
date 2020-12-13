module.exports = {
      url: process.env.DATABASE_URL ||  
    "postgres://postgres:bcd127@localhost:5432/dbGamesCenter", 
      config: { 
        dialect: "postgres",
        "dialectOptions": {
            "ssl": {
                require: true,
                rejectUnauthorized: false
            }
        },          
        logging: console.log, 
        define: { 
          timestamp: true, 
          underscored: true, 
        }, 
    }, 
}; 
