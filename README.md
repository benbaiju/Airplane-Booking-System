]# Airplane Booking System

The Airplane Ticket Booking System is a user-friendly platform designed to streamline the process of booking airline tickets for travel. This system utilizes RESTful APIs to enable seamless communication between the frontend and backend, providing users with a smooth and efficient booking experience.

## Technical Requirements

- Java 8
- Maven
- Spring Boot 2.7.14
- Packaging: JAR
- HTML, CSS, JavaScript
- Bootstrap 5

### Frontend Development

The frontend of the application is developed using a combination of HTML, CSS, and JavaScript. The Bootstrap framework is utilized to enhance the aesthetics and responsiveness of the user interface.

Key HTML files:

- `book.html`: User input interface for the booking application, where users can input their booking details.
- `home.html`: Default homepage that welcomes users and sets the tone for their interaction with the application.

CSS:

- `style.css`: External CSS file that styles both the `book.html` and `home.html` pages, along with adjustments to the Bootstrap framework.

JavaScript:

- `script.js`: Establishes a connection between the frontend and backend using a REST API. It handles user interactions and utilizes the REST API's POST method.

### Backend Development

The backend component of the project is powered by a REST API developed with Spring Boot, backed by a MySQL database.

Key components:

- **Model Class**: Defines the necessary data structures for creating models, which form the basis for database entities.

- **Controller Class**: Crafts RESTful methods, including GET, POST, PUT, and DELETE, enabling seamless communication between the frontend and backend.

- **Repository Controller**: Utilizes JPA (Java Persistence API) for simplified database interaction, facilitating various database operations.

- **Dependencies**: Essential dependencies include Spring Web for web capabilities, JPA for Java Persistence, and the MySQL driver for database interaction.

- **Property Configuration**: The property configuration folder contains necessary data for connecting to the MySQL database, ensuring smooth backend operation.

## Getting Started

1. Clone the repository.
2. Set up the MySQL database using the provided configuration in the property configuration folder.
3. Build the project using Maven.
4. Run the Spring Boot application.
5. Access the application through your web browser.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please submit an issue or pull request.

## License

This project is licensed under the [MIT License](LICENSE).
