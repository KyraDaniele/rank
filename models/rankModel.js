const db = require('./conn');

class Rankings {
    constructor(topic_name) {
        this.topic_name = topic_name;
    }
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM rank;`);
            return response;
        } catch(error) {
            return error.message;
        }
    }
}

module.exports = Rankings;
