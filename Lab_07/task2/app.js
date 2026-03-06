import { NotificationFactory } from "./NotificationFactory.js";

function sendNotification(type, options, message) {
  try {
    const notification = NotificationFactory.create(type, options);
    return notification.send(message);
  } catch (error) {
    console.error("Failed to send notification:", error.message);
    return { success: false, error: error.message };
  }
}

console.log("Supported types:", NotificationFactory.getSupportedTypes());

console.log("\n=== EMAIL TEST ===");
console.log(
  sendNotification(
    "email",
    { to: "user@example.com", subject: "Hello" },
    "Welcome!"
  )
);

console.log("\n=== SMS TEST ===");
console.log(
  sendNotification(
    "sms",
    { to: "+1234567890" },
    "Your code is 123456"
  )
);

console.log("\n=== PUSH TEST ===");
console.log(
  sendNotification(
    "push",
    { deviceToken: "abc123", title: "Alert" },
    "You have a message"
  )
);

console.log("\n=== INVALID TYPE TEST ===");
console.log(
  sendNotification("fax", { to: "12345" }, "This should fail")
);