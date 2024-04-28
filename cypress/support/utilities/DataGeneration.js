const { faker } = require('@faker-js/faker');

export class DataGeneration {
    getRandomUsername() {
        return faker.internet.userName()
    }

    getRandomPassword() {
        return faker.internet.password()
    }

    getRandomBool() {
        return Math.random() < 0.5
    }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}