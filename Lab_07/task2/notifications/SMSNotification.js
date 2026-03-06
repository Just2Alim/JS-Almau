export class SMSNotification {
    constructor(to) {
        this.to = to;
    }

    send(message) {
        console.log(`Sending SMS to ${this.to}: ${message}`);
        return { success: true, to: this.to, message };
    }
}
    