const db1 = require('./conn');
const db2 = require('./conn');

class Rankings {
    constructor(topic_name) {
        this.topic_name = topic_name;
    }
    static async getAll() {
        try {
            const response = await db1.any(`SELECT * FROM rank;`);
            return response;
        } catch(error) {
            return error.message;
        }
    }
}

// class Score {
//     constructor(ranking) {
//         this.ranking = ranking;
//     }
//     static async getRank() {
//         try {
//             const scoring = await db2.any(`SELECT * FROM ranking_system;`);
//             return scoring;
//         } catch(error) {
//             return error.message;
//         }
//     }
// }


module.exports = Rankings, Score;
