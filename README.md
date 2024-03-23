# Armstrong Werth
А landing page for a musical instruments sales website without online payment functionality. A brochure website with links to distributors and a contact form.

## Technologies
List of technologies, tools, and programming languages used.
- Open Server Panel - local development environment utility
- Frontend: HTML, CSS, JavaScript, AJAX
- Backend: WordPress, PHP
***
## Installation
**Step 1: Open Server Panel Installation**
- You can download this tool from offical website: [download link](https://ospanel.io/download/)
- Or, if you're having trouble, you can use the direct download link:  [download link](https://files.ospanel.io/s/Ar5OPvicw3wUen6hhtNnLw/1711639665/open_server_panel_5_4_3_setup.exe)

**Step 2: Setting Up Local Host**
1. If you want to rename the domain from `localhost` to `your domain`, follow these steps:
   - Go to system tray
   - Chouse Open Server Panel
   - Select _Project folder_
   - Rename localhost folder as you want
2. Make sure the SQL module is activated:
   - Going to Open Server _settings_
   - _modules_
   - selecting one of the MySQL versions 
3. Run the server and make new database:
   - Open Server Panel
   - Click to _Run server_
   - Going to _advanced_ 
   - _PhpMyAdmin_
4. In the open PhpMyAdmin, create a new database, name it as you like, but **remember the name** - it will be needed for WordPress to work.

**Step 3: Deploying WordPress**
1. Download WordPress from the official website: [download link](https://wordpress.org/download/)
2. Unpack it into the domain folder:
   - Go to system tray
   - Chouse Open Server Panel
   - Select _Project folder_
   - Umpack WP into `localhost` or `your domain`
   - In the brouser open `localhost/wp-login.php` or `your domain/wp-login.php`
3. Registration:
   - Specify the name of the previously created database
   - Use `mysql` as the username and password when working with Open Server
   - The server name, regardless of whether you renamed the domain folder or not, will be `localhost`. 
4. Then follow the installation instructions.

**Warning:** Don't forget the _password_ you created. After registration, you will need it to access the CMS.

**Step 4: Download repo to themes folder**
To download the repository and place it into a separate folder with your own name in the WordPress themes directory, follow these steps:

1. Open the terminal or command prompt.
2. Navigate to the directory
   - Open _Project folder_
   - Keep going `/domain name/wp-content/themes/`
3. Execute the following Git command:

   ```bash
   git clone https://github.com/DarkDomian/ArmstrongWerth.git <folder_name>
    ```
    Where `<folder_name>` is the name of the folder where you want to clone the repository.


4. Choose a theme in WordPress:
   - Log in to the system
   - Select _Appearance_ from the left menu 
   - Find the _AW oboe theme_ and activate it

***
##