BILLIN CODE CHALLENGE
=====================

Welcome to Billin code challenge!

This project includes the scaffold in order to start the code challenge. You will need to proceed with installation and configuration and after that, you can do the exercise. It will have 3 main parts we are going to explain. This code challenge has been made in order to test fullstack skills. You will need to use **GraphQL**, **NodeJS** and **ReactJS**. If you want to add any CSS preprocessor or similar, please use **PostCSS**. The database has been made with **MongoDB** and **Jest** is already configured in order to test this app.

Go ahead and let us know if you have any question or feedback.

Once you have done your code challenge send us your github repository link to [devteam@billin.eu](mailto:devteam@billin.eu)

## Configuration

In this project you will find two different configurations; client and server. We are going to explain step by step how you can set this project.

Fork the repo from this link and clone this project into your desired folder.

```
git@github.com:[YOUR_USER]/code-challenge.git
```

You need to install all the dependencies. As we are giving to you the server and the client, you need to configure both environments.

You should go to `code-challenge/server` and install all the dependencies using *npm* or *yarn* (if you are a hipster). After this configuration you will need to start the server and populate the database.

```
cd code-challenge/server
yarn
yarn start
```

In the same way, and without closing server, you need to go to the repository root `code-challenge`, where you can find the client, and proceed with the installation and configuration.

```
cd ..
yarn
yarn start
```
And that's all! You will have everything running so you can go ahead to `http://localhost:3000` and proceed with the code challenge.

## Exercises

This code challenge have three main parts. You don´t have to do all the exercises. The more you do, the better knowledge we will have.

### First exercise

We have a list of 10 news articles. We need to see how would you represent this data in `http://localhost:3000`

You are free of using one or other way to organize the components, containers, styles, etc. You have to use `ReactJS` and `CSS` (remember, if you want to add any CSS preprocessor please use **PostCSS**), but don't worry about the "beauty" of your app, we are going to focus in the code (Javascript and CSS) and the way you represent the architecture of your app. This project has been configured with babel so you should use ES6/ES7. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) so go ahead if you need more information about the settings.

The minimum structure has to be:

```
----------------------------------------
|                 HEADER               |
----------------------------------------
|   --------     --------    --------  |
|  |  CARD  |   |  CARD  |  |  CARD |  |
|   --------     --------    --------  |
|                                      |
|   --------     --------    --------  |
|  |  CARD  |   |  CARD  |  |  CARD  | |
|   --------     --------    --------  |
|                                      |
----------------------------------------
|                 FOOTER               |
----------------------------------------
```

Each card should have *author* and *excerpt* information you will find in `https://localhost:3000` after running your project. Number of cards in each row depends on you. All the additional information or CSS improvements will be appreciated.

Don't forget to use ES6/ES7!

### Second Exercise
We are going to make an *SPA* from this app. We need to manage our data and be able to change from one path to another.  You can use Redux, MobX, or whatever you want in order to manage you app state. In the same way you can use other library to manage routing.

We need to see the main view of an item, so you will need to improve the backend in order to achieve this data from the server using a *GraphQL* query, and manage the response in frontend so we can see this data from each article:

```
author: String,
content: String,
published: Boolean,
tags: [String],
title: String,
```

So this exercise includes:

* Change server in order to achieve new data
* Set two paths in our SPA, `http://localhost:3000` for the list and `http://localhost:3000/:id` for each view.
* Save state form our SPA using a state manager/container.
* Do `http://localhost:3000/:id` view displaying the required info.

### Third exercise
We need to update, create and delete our data. You will need to do backend functionality and frontend views in order to achieve this goal.

We have to be able to:

* Delete an existing article
* Adding a new article
* Update data from article (author, content, published, tags and title).

## Pieces of advice

We will love to receive your code, even if you are not interested in working at Billin 😜. We will like your app if:

* You follow clean coding practices
* You test all the app ([Jest](https://facebook.github.io/jest/) is configured)
* You use git properly
* You think about the UX a little bit

Let us know if you have any question or feedback.

Hope to see your code soon!
