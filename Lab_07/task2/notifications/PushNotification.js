export class PushNotification {
    constructor(deviceToken) {
        this.deviceToken = deviceToken;
        this.title = this.title;
    }

    send(message) {
        console.log(`Sending push notification to ${this.deviceToken}: ${message}`);
        return { success: true, deviceToken: this.deviceToken, message };
    }
}