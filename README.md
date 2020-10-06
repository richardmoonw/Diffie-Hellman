# Diffie-Hellman Cryptographic Protocol

## Requirements:
Implement the Diffie-Hellman protocol in JavaScript. Diffie-Hellman is a method of securely exchanging cryptographic keys over a public channel.

### Considerations:
- The algorithm considers 4 main variables: a public Alpha and Q, and two private X's.
- Alpha and Q are both publicly available numbers. Users pick private values X1 and X2 and then generate a key and exchange it publicly, the opposite person receives the key and from that generates a secret key after which they have the same secret key to encrypt.

### Formulas:
![Formulas](/images/formulas.jpg)

## Content:
- /images: Folder containing all the images.
- /public: Folder containing images and an index.html template file.
- /src: Folder containing the components and other relevant JavaScript files.
- package.json: Node's package.json.

## Instructions to run the app.
1. Clone or download the repository in a given folder.
2. Navigate to the root directory of the project.
3. If it is the first time that you run it, type ```yarn install``` to install all the dependencies and create the node_modules folder. (If you prefer, you can install all the dependencies listed in the package.json by yourself).
5. Run the application with the following command:
```
yarn start
```