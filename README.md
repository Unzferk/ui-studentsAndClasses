## Pre Requirements ##

To set up the system we are going to need some requirements.

**Visual studio code** 

As code editor, you can use another of your preference. [Download VSCode](https://code.visualstudio.com/download)

**NodeJS** 

As javascript runtime environment, in our case working with version 16 LTS and npm as package manager on its version 8.11 or more [Download Node](https://nodejs.org/en/download/)

**Cloning the repository**

To download the project in your machine, you can download it or clone it from git hub:

```
    $ git clone https://github.com/Unzferk/ui-studentsAndClasses.git
```

## Configuration and commands ##

Once the project is cloned on your machine.
You have to execute the following command in the folder that contains the package.json file.

``` npm install ```

Once is istalled all the dependencies in the node_modules folder. Then execute the next command:

``` npm start ```

The app runs, by default, on 3000 port.


# .env Variables #

We just have one variable in our .env file, and it is the default path for the API service for this UI.

``` 
REACT_APP_API_URL="http://localhost:8030/api"
```

**Remember:** If you going to change the default port of this system '3000' you have to update environment variables of API as well, or you can get conflicts with CORS.


### File structure ###

We follow the file structure according to this [blog](https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145)


## ENJOY IT! ##

Once you run npm install should be enough to start working with these views.
Remember have the API running or you won't get any data.

#### Contact Information ####

Development team:
* Unzueta Fernando : fernando.unzueta.dev@gmail.com


