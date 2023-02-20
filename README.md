# FCM Digital - QA Technical challenge
Welcome to the FCM Digital QA team technical challenge, the objective of this challenge is to learn more about the way you work. There is no single solution, so don't worry, just do the best you can. 

## Challenge information
You will have to create a fork of this repository on which you will work. Once you complete the challenge, you will contact us via email and we will proceed to review it.

## Goals
Given some user stories witch their acceptance criterias:
 1. Write the test cases in the README.md file, [Test Cases](#test-cases) section.
 2. Create a project using YARN.
 3. Install Cypress using YARN.
 4. Implement in Cypress as many tests as test cases have been defined to be validated automatically. Upload to your fork all the code structure needed to run the tests as well as the instructions so that they can be easily executed (write the instructions on the README.md file, [How to Run the Tests](#how-to-run-the-tests) section).
 5. Write the git commands used during the challenge in the README.md file, [Git Commands](#git-commands) section.
 6. Write down the problems you have encountered during the challenge in the README.md file, [Problems](#problems) section.

# Challenge
## Challenge URL
https://www.saucedemo.com

## User Story 1
As a Swag Labs admin, I need to access/logout the platform with the 4 different user types.

## Acceptance Criterias 1
Ensure the Swag Labs admins are able to:
1. Log in/Log out to Swag Labs (standard_user)
2. Not logging in to Swag Labs and getting an error (locked_out_user)
3. Log in/Log out to Swag Labs (problem_user)
4. Log in/Log out to Swag Labs (performance_glitch_user)

## User Story 2
As a Swag Labs standard_user, I need to open the products detail page in the Swag Labs ordering platform so that get more information about the products

## Acceptance Criterias 2
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to access to the products details view

## User Story 3
As a Swag Labs standard_user, I need to add to cart products in the Swag Labs ordering platform so that I can buy it

## Acceptance Criterias 3
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to add to cart product(s) to buy
4. Navigate into the Products details page
5. Able to add to cart product(s) to buy

## User Story 4
As a Swag Labs standard_user, I need to review my previous added to cart products in the Swag Labs ordering platform so that I can remove it

## Acceptance Criterias 4
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to add to cart product(s) to buy
3. Able to remove product(s)
4. Navigate into the Products details page
5. Able to remove product(s)
6. Navigate into the shopping cart
7. Able to remove product(s)

## User Story 5
As a Swag Labs standard_user, I need to sort products in the Swag Labs ordering platform so that I can find what I'm looking for easily

## Acceptance Criterias 5
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to sort product(s) in different ways

## User Story 6
As a Swag Labs standard_user, I need to reset the app status in the Swag Labs ordering platform so that I can reset the app to its initial settings

## Acceptance Criterias 6
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the menu page
3. Able to reset app state

## User Story 7
As a Swag Labs standard_user, I need to see the product information in the product page and product details page in the Swag Labs ordering platform so that I can know what I'm buying

## Acceptance Criterias 7
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to see all the product information (image, title, description, price)
4. Navigate into the Products details page
5. Able to see all the product information (image, title, description, price)

## User Story 8
As a Swag Labs standard_user, I need to see the shopping cart with the number of products added in the Swag Labs ordering platform so that I can to know the status of the same

## Acceptance Criterias 8
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to see the shopping cart with the number of products added
4. Navigate into the Products details page
5. Able to see the shopping cart with the number of products added
6. Navigate into the shopping cart
7. Able to see the shopping cart with the number of products added

## User Story 9
As a Swag Labs standard_user, I need to see all the product added to the shopping cart in the Swag Labs ordering platform so that I can to know what I am going to buy

## Acceptance Criterias 9
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate into the shopping cart
3. Able to see all the products information what I am going to buy (qty, name, description, price)

## User Story 10
As a Swag Labs standard_user, I need to buy all the product added to the shopping cart in the Swag Labs ordering platform

## Acceptance Criterias 10
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate into the shopping cart
3. Able to Checkout
4. Able to complete a form with my personal data
5. Able to see an overview about my order (qty, name, description, unit price, payment information, shipping information, item total price, tax, total price)
6. Able to see a confirmation page

# Test Cases
User Login
    Test Case ID: TC01 
    Purpose: Verify if a standar user will be able to login with a valid username and valid password.
    Test Data:
        user standar and password
    Steps:
        1.1 Run the website 
        1.2 Enter user name
        1.3 Enter Password
        1.4 Click login
        1.5 Check user is in Product Page
    Status:
        PASS
    
    Test Case ID: TC02 
    Purpose: Verify if a locked user cannot login with a locked username and an valid password.
    Test Data:
        username locked and password
    Steps:
        1.1 Run the website 
        1.2 Enter user name
        1.3 Enter Password
        1.4 Click login
        1.5 An error message appears, due to blocked user
    Status:
        PASS
    
    Test Case ID: TC03
    Purpose: Verify if a problem_user will be able to login with a valid username and valid password.
    Test Data:
        problem user and password
    Steps:
        1.1 Run the website 
        1.2 Enter user name
        1.3 Enter Password
        1.4 Click login
        1.5  Check user is in Product Page
    Status:
        PASS

    Test Case ID: TC04
    Purpose: erify if a performance_glitch_user will be able to login with a valid username and valid password.
    Test Data:
        performance user and password
    Steps:
        1.1 Run the website 
        1.2 Enter user name
        1.3 Enter Password
        1.4 Click login
        1.5 Check user is in Product Page
    Status:
        PASS

Management Products
    Test Case ID: TC05
    Purpose: Browse the product page and view product details.
    Test Data:
        user standar and password
    Steps:
        1.1 Run the website 
        1.2 Login standar_user
        1.3 Enter Password
        1.4 Choose a product at random
        1.5 Check that the image, title, description and price are correct. 
    Status:
        PASS
    
    Test Case ID: TC06
    Purpose: Browse through the product page and see the detail of all products.
    Test Data:
        user standar and password
    Steps:
        1.1 Run the website 
        1.2 Login standar_user
        1.3 Enter Password
        1.4 Navigate within the product page, and access the product details.
        1.5 Check that the image, title, description and price are correct. 
    Status:
        PASS

Sort Products
    Test Case ID:  
    Purpose: Sort the products by descending alphabetical order
    Test Data:
        user standar and password
    Steps:
        1.1 Run the website 
        1.2 Login standar_user
        1.3 Check that the title of the first product
        1.4 Click in de filter option 'Name (Z to A)'
        1.5 Check that the products have been ordered correctly
    Status:
        PASS
    
   Test Case ID:  
    Purpose: Sort the products by ascending alphabetical order
    Test Data:
        user standar and password
    Steps:
        1.1 Run the website 
        1.2 Login standar_user
        1.3 Check that the title of the first product
        1.4 Click in de filter option 'Name (A to Z)'
        1.5 Check that the products have been ordered correctly
    Status:
        PASS
    
    Test Case ID: 
    Purpose: Sort by price from highest to lowest
    Test Data:
        user standar and password
    Steps:
        1.1 Run the website 
        1.2 Login standar_user
        1.3 Check that the price of the first product
        1.4 Click in de filter option 'Price (high to low)'
        1.5 Check that the products have been ordered correctly
    Status:
        PASS

    Test Case ID: 
    Purpose: Sort by price from lowest to highest
    Test Data:
        user standar and password
    Steps:
      1.1 Run the website 
        1.2 Login standar_user
        1.3 Check that the price of the first product
        1.4 Click in de filter option 'Price (low to high)'
        1.5 Check that the products have been ordered correctly
    Status:
        PASS

Reset App
    Test Case ID: TXX
    Purpose: Check that if you click on the 'Reset App State' menu option, the changed data are reset to the initial values.
    Test Data:
        user standar and password
    Steps:
        1.1 Run the website 
        1.2 Login standar_user
        1.3 Sort product by Price low-high
        1.4 Click menu option 'Reset App State'
        1.5 Check that the product order has been reset.
    Status:
        PASS


# How to Run the Tests


# Git Commands
git checkout "branch_name"

git add .
git commit -m "Modifications to be uploaded"
git push 

# Problems
Section to write down problems you have encountered during the challenge
