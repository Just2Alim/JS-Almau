import ConfigManager from "./singleton.js";
import config from "./config.js";

console.log("=== CLASS-BASED SINGLETON TEST ===");

const instance1 = ConfigManager.getInstance();
const instance2 = ConfigManager.getInstance();
const instance3 = new ConfigManager();

console.log("instance1 === instance2:", instance1 === instance2); // true
console.log("instance1 === instance3:", instance1 === instance3); // true

instance1.set("appName", "MyApp");
instance1.set("version", "1.0.0");

console.log("From instance2 appName:", instance2.get("appName")); // MyApp
console.log("From instance3 version:", instance3.get("version")); // 1.0.0
console.log("All config:", instance2.getAll());

console.log("\n=== MODULE-BASED SINGLETON TEST ===");

config.set("theme", "dark");
config.set("language", "en");

console.log("theme:", config.get("theme"));
console.log("language:", config.get("language"));
console.log("all module config:", config.getAll());

const anotherReference = config;
anotherReference.set("timezone", "UTC+6");

console.log("Shared module state:", config.getAll());