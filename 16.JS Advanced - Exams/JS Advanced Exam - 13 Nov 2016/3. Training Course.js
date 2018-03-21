class MailBox {
    constructor() {
        this.mailBox = new Map();
        return this;
    }

    addMessage(subject, text) {
        if (typeof subject === "string" && typeof text === "string") {
            this.mailBox.set(subject, text);
            return this;//Returns the mailbox itself to allow chaining.
        }

    }

    get messageCount() {
        return this.mailBox.size;

    }

    deleteAllMessages() {
        this.mailBox.clear();

    }

    findBySubject(substr) {
        let res = [];
        for (let key of this.mailBox) {
            if (key[0].includes(substr)) {
                let subject = key[0];
                let text = key[1];
                res.push({subject: subject, text: text});
            }
        }
        return res;
    }

    toString() {
        if (this.mailBox.size === 0) {
            return "* (empty mailbox)";
        }
        let str="";
        for (let key of this.mailBox) {
            str += `* [${key[0]}] ${key[1]}\n`;

        }

        return str;

    }

}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());


