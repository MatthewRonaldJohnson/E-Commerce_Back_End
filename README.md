
# E-Commerce Backend


## Description

This project represents the backend of an e-commerce site. It sets up an express server that can communicate with a mysql database using sequelize to read requests from the client and send back the requested data.

## [Walkthrough Video](https://www.youtube.com/watch?v=u5FHOyO8Mu0&feature=youtu.be)

A video demostrating how this program's functionality using Insomnia can be found [here](https://www.youtube.com/watch?v=u5FHOyO8Mu0&feature=youtu.be).

## Example Responses

Below are three images that show exmaples of responses for get requests.

Example Category Get Response  
![Example Category Get Response](assets\img\Example-Category-Get.PNG)  

Example Product Get Response  
![Example Product Get Response](assets\img\Example-Product-Get.PNG)  

Example Tag Get Response  
![Example Tag Get Response](assets\img\Example-Tag-Get.PNG)
        
## Installation Instructions

This project uses the dotenv, express, mysql2, and sequelize npm packages. Use the following command to install these packages.

```
npm i
```

## Usage Information

To run this program you will need to create a .env file that stores your database name, mysql user, and mysql password in the following format. 

```
DB_USER=<your user here>
DB_PW=<your password here>
DB_NAME=<your database name here>
```
