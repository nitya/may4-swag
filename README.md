# #30DaysOfSWA: MayTheFourth SWAG!

![Screenshot with a Star Wars Quote](mind-tricks-watto.png)

_This image was pulled at random by the [Unsplash](https://unsplash.com) query API in app_

## Objective

It's May 4th. Let's create a simple Static Web App with a Managed Functions API using the [Azure SWAG](https://github.com/sinedied/azure-swag) template, customizing it to use quotes and images related to the Star Wars Day celebrations!!

## Steps

Here are the steps I followed to make this work!

 * Use [Azure-SWAG template](https://github.com/sinedied/azure-swag/generate) to generate [this repo](https://github.com/nitya/may4-swag)
 * Edit the [/api/quote/index.js](https://github.com/nitya/may4-swag/blob/main/api/quote/index.js) - update 
    - `quotes` with [Star Wars examples](https://www.starwars.com/news/15-star-wars-quotes-to-use-in-everyday-life)
    - `unsplashApi` query to use "star-wars"
 * Commit changes to repo
 * Use `Deploy to Azure` button to walk through SWA  quickstart using Azure Portal
 * Browse deployed site, and keep clicking!

And #MayTheFourthBeWithYou !


## References
 * [Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps)
 * [Tutorial from Yohan Lasorsa](https://dev.to/sinedied/the-easy-way-to-serverless-web-apps-and-apis-with-azure-swag-2heb) - for using the SWAG template
 * [Unsplash.com - "Star-Wars"](https://unsplash.com/s/photos/star-wars) images from users
 * [15 Star Wars Quotes to Use In Everyday Life](https://www.starwars.com/news/15-star-wars-quotes-to-use-in-everyday-life) - from the Star Wars site!





---

> Read the original README contents here:

:sunglasses: Azure SWAG demo

This is a simple barebone demo for [Azure SWAG](https://docs.microsoft.com/azure/static-web-apps?WT.mc_id=javascript-0000-yolasors) (**S**tatic **W**eb **A**pps on **G**itHub).
You can use it as a template for your own apps.

It includes a website using HTML + JavaScript and an example Node.js API.
See it live [here](https://aka.ms/swag-demo).

Click on **Use this template** on GitHub, then click on the button below to deploy your own (for free): 

[![Deploy to Azure button](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/?feature.customportal=false&WT.mc_id=30daysofswa-61155-ninarasi#create/Microsoft.StaticApp)

## What's Azure *SWAG*?

TL;DR:

> It's an all-inclusive hosting service for web apps with serverless APIs built using JavaScript, based on continuous deployment from a GitHub repository.

For the longer version with the deployment instructions, [see this full length article](https://dev.to/sinedied/the-easy-way-to-serverless-web-apps-and-apis-with-azure-swag-2heb).

You can also take a look at [the official docs](https://docs.microsoft.com/azure/static-web-apps?WT.mc_id=javascript-0000-yolasors).
