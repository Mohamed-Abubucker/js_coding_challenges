class ChatRoom {
    logMessage(message) {
        console.log(message);
    }
};

class User {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }

    send = (message) => {
        this.chatroom.logMessage(`${this.name} says: ${message}`);
    }
}

const chatroom = new ChatRoom();
const user1 = new User('Abubucker', chatroom);
const user2 = new User('Abdullah', chatroom);
const user3 = new User('Rejeeya', chatroom);

user1.send('Assalamu alaikum');
user3.send('va alaikum salam');
user2.send('va alaikum salam');
user2.send('Ungaa....');
