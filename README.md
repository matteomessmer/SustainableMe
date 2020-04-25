# SustainableMe
Project 3 for the course Engineering of Mobile Systems

# Authors
- Simonluca Merlante https://github.com/s1m0nI00c4/
- Matteo Messmer http://github.com/matteo-messmer/
- Chiara Mistrorigo https://github.com/chiaramistro/
- Ulrike Niederstätter https://github.com/uniederstaetter/

# Description
SustainableMe is an application that helps tourists and locals in South Tyrol to behave in a more environmental-friendly way, by applying a gamification approach to common activities. The app allows to complete 4 types of missions: transport mission (using public transportation instead of private transportation), location missions (visit less-crowded, less-renowned locations), restaurant missions (visit local restaurant) and environmental missions (a range of missions to help the environment, such as picking up garbage or support local communities).

# Notes for testing
- If you don's see a Confirmation email (used for registration and password reset purposes) check your spam folder. This is probably due to the fact that the email server we use is not certified.
- To test the location mission, your device needs to be phisically within 1.000 metres of the location. For this purpose, we created the "Go to UniBZ" location mission.
- A warning abouth the method "ComponentWillReceiveProps" is issued at application start. This is due to the use of the method in the "Unstated" library. An issue has already been raised to the library's owner; the warning hower doesn't affect the app's functionalities.
- For testing, please use the QR codes in the folder "QR Codes" of the repository. For each restaurant there is a different QR code (see the names associated). For the transport mission, there is one single QR code valid for any type of route (Transport Missions.png).

# Notable functionalities
- Communication with a MySQL Database that contains tables for missions and users, with some PHP scripting to handle exchange of information.
- Communication with Expo APIs to gather a device's position, access to its camera roll, its memory, the default browser, etc...
- Communication with GMaps APIs to gather traffic directions (using public transportation) and location coordinates
- Nested Stack and Tab NavigationActions
- Persistence (through Unstated library)

# API Endpoints
- To get the list of Missions (GET): http://sustainableme.fablabnetwork.ml/API/getMissions.php
- To get the list of Users (GET): http://sustainableme.fablabnetwork.ml/API/getUsers.php
- To add Points to an User (POST): http://sustainableme.fablabnetwork.ml/API/addPoints.php
- To login (POST): http://sustainableme.fablabnetwork.ml/API/login.php
- To register (POST): http://sustainableme.fablabnetwork.ml/API/register.php
- To modify an user (POST): http://sustainableme.fablabnetwork.ml/API/modifyUser.php
- To reset the password (POST): http://sustainableme.fablabnetwork.ml/API/resetPassword.php
- To set the new password (POST): http://sustainableme.fablabnetwork.ml/API/setNewPassword.php

# Website
- The email verification page: http://sustainableme.fablabnetwork.ml/API/verifyEmail.php
- To set the new password: http://sustainableme.fablabnetwork.ml/API/newPassword.html
