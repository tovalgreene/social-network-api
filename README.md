## Social Network API
# Description
This API is designed for a social media startup, leveraging a NoSQL database to efficiently handle and manipulate large amounts of unstructured data. It provides a robust backend solution, allowing for scalable and flexible data management tailored to the dynamic needs of a social networking platform.

# User Story
As a social media startup,
I want an API for my social network that uses a NoSQL database,
So that my website can handle large amounts of unstructured data.
Acceptance Criteria
Server Initialization: When the command to invoke the application is entered, the server starts and Mongoose models are synced to the MongoDB database.
GET Routes: Upon opening API GET routes in Insomnia for users and thoughts, the data is displayed in formatted JSON.
POST, PUT, DELETE Routes: API POST, PUT, and DELETE routes are testable in Insomnia, enabling the creation, update, and deletion of users and thoughts in the database.
Reactions and Friends Management: API POST and DELETE routes allow for the creation and deletion of reactions to thoughts, as well as adding and removing friends from a user’s friend list.

# Installation
To use this API:

Clone the repository to your local environment.
Navigate to the directory of the cloned repository.
Run npm install to install the necessary dependencies.

# Usage
Start the server by running the command npm start.
Open Insomnia or any other API testing tool to interact with the API.
Test various API routes to manage users, thoughts, reactions, and friends.
Technologies Used
Node.js
Express.js
MongoDB
Mongoose ODM
License
This project is open-source and available under the MIT License.

Note: This Social Network API is built to provide efficient and effective solutions for managing the diverse and ever-evolving data needs of a modern social media startup. Its use of NoSQL database technology ensures optimal performance in handling large-scale data operations.