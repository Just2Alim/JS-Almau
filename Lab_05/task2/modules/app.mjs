import qs, { setText } from "./utils.mjs";         
import { createMessage, safeLog } from "./core.mjs"; 
import * as Constants from "./constants.mjs";     

const titleEl = qs("#title");
const statusEl = qs("#status");
const btnEl = qs("#loadFeatureBtn");

setText(titleEl, `${Constants.APP_NAME} v${Constants.VERSION}`);
setText(statusEl, createMessage(Constants.APP_NAME));
safeLog("App started");

// Import on Interaction
btnEl.addEventListener("click", async () => {
  setText(statusEl, "Loading advanced feature...");
  try {
    const module = await import("./advanced_feature.mjs");
    const result = module.runAdvancedFeature();
    setText(statusEl, result);
  } catch (err) {
    console.error(err);
    setText(statusEl, "Failed to load advanced feature (fallback message).");
  }
});

// Import on Visibility
const lazyTarget = qs("#lazyTarget");

const observer = new IntersectionObserver(async (entries) => {
  const isVisible = entries.some((e) => e.isIntersecting);
  if (!isVisible) return;

  observer.disconnect();

  try {
    const module = await import("./lazy_component.mjs");
    module.mountLazyComponent(lazyTarget);
  } catch (err) {
    console.error(err);
    lazyTarget.textContent = "Failed to load lazy component.";
  }
});

observer.observe(lazyTarget);
