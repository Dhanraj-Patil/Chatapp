# Chatapp
GlobalChat

  Global Chat is a website where people from various locations can come together and talk with random strangers to get rid of their boredom, to socialize, to make discussions on various topics, and much more, irrespective of the country they belong to, their cast and race.

I am Dhanraj Patil. I developed this chat application called GlobalChat as a project for my Future Ready Talent internship using few microsoft azure services.
Whit the help of visual studio code provided by microsoft and azure web service I was able to host the application. 
Azure Database for MySQL is used to store the login data.
The main chat screen is where the magic happens, people from all over the world can chat here.

Node.js code snippet used to access Azure Database for MySQL:
    
    var con = sql.createConnection({
    host: "globalchat-data-server.mysql.database.azure.com",
    user: "globalchat_Admin",
    password: "Djp@111234..",
    database: "GlobalChat",
    port: 3306,
    ssl: { ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem") }
});


app.js file is the server file used to run this application.
All the static files (html, javascript, style) are present the public folder.
