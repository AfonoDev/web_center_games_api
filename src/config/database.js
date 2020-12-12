module.exports = {
      url: process.env.DATABASE_URL ||  
    "postgres://postgres:bcd127@localhost:5432/dbGamesCenter", 
      config: { 
        dialect: "postgres", 
        logging: console.log, 
        define: { 
          timestamp: true, 
          underscored: true, 
        }, 
    }, 
}; 