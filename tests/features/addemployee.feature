
Feature: Verify Add Employee functionlity

    Feature Description

    Background: login

        Given user launch the Application
        When User enter username as "Admin" and password as "admin123"
        And user click on login button
        Then user should be navigated to dashbaord page

    Scenario: Verify Add Employee with Mandatory details
        When user clicks on PIM
        And user clicks on Add Employee submenu
        And user enter firstname as "Raju" and lastname as "G"
        And user clicks on save Button
        Then User should get success Message
        Then logout from application

    Scenario: Verify error Messages for Mandatory fields
        When user clicks on PIM
        And user clicks on Add Employee submenu
        And user clicks on save Button
        Then User should see error message for firstname and lastname fields
        Then logout from application
