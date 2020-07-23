export class User {
    constructor (username){
        this.username = username;
    }
}

export class Message {
    constructor (username, message, datetime=null, target=null){
        this.username = username;
        this.message = message;
        this.datetime = (datetime)? datetime : new Date();
        this.target = target;
    }
}
