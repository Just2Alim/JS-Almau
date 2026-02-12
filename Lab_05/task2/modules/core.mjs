export const createMessage = (name) => {
  return `Hello from ${name}!`;
};

export const safeLog = (msg) => {
  console.log(`[core] ${msg}`);
};
