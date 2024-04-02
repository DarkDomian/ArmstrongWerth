# Armstrong Werth
А landing page for a musical instruments sales website without online payment functionality. A brochure website with links to distributors and a contact form.

## Technologies
List of technologies, tools, and programming languages used.
- Open Server Panel - local development environment utility
- Frontend: HTML, CSS, JavaScript, AJAX
- Backend: WordPress, PHP
***
## Installation
- Open Server Panel Installation
   - You can download this tool from offical website: [download link](https://ospanel.io/download/)
   - Or, if you're having trouble, you can use the direct download link:  [download link](https://files.ospanel.io/s/Ar5OPvicw3wUen6hhtNnLw/1711639665/open_server_panel_5_4_3_setup.exe)

- Setting Up Local Host
   - Activate the SQL module: settings → modules → chose `MySQL-8.0-Win10`
   - Run the server
   - Make new database: advanced → PhpMyAdmin ( use `root` as the username and empty password ) 
      → create DB → named it `wordpress`   

- Deploying WordPress
   - Download WordPress from the official website: [download link](https://wordpress.org/download/)
   - Unpack it into the domain folder: from OSP tray open Project folder → unpack WordPress into
      localhost → open `localhost/wp-login.php` in the browser      
   - Registration: `wordpress` are name of DB → username and password are `mysql`
      → server name is `localhost`      
   - Then follow the installation instructions.

- Download repo to themes folder
   - Open the terminal or command prompt.
   - Navigate to the corrent directory: from OSP tray open Project folder 
      → keep going to `/localhost/wp-content/themes/`   
   - Execute the following Git command:
     ```bash
     git clone https://github.com/DarkDomian/ArmstrongWerth.git AW-theme
      ```
   - Choose a theme in WordPress: log in to the WP system → select _Appearance_ from the left menu 
      → Find the _AW oboe theme_ and activate it

***
##