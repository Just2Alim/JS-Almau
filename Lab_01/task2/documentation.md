# Documentation

This project implements the Provider Pattern described in Chapter 1, section “An Everyday Use Case for Design Patterns” from *Learning JavaScript Design Patterns* by Addy Osmani.

The main problem solved here is **prop drilling**. In a React application, prop drilling happens when data must be passed through several intermediate components, even if those components do not directly need all of that data. In this dashboard example, user information, permissions, and theme preferences are needed in multiple nested components. Without the Provider Pattern, these values would need to be passed from `App` to `Dashboard`, then to `Header`, then to `UserMenu`, and finally to `UserInfo`.

To solve this problem, the project uses React Context API. The `UserProvider` component stores shared state such as `user`, `permissions`, and `theme`. It then exposes this state through `UserContext.Provider`. Any nested component can access the shared data by using the custom `useUser()` hook.

This approach makes the code cleaner and easier to maintain. Components no longer depend on long chains of props, and each component can directly read only the values it needs. It also improves scalability, because adding more nested components does not require changing every parent component.

Another benefit is safety. The custom hook includes an error check to ensure it is only used inside the provider. This helps prevent misuse and debugging problems.

Overall, this implementation clearly follows the Provider Pattern and demonstrates why it is useful in React applications with deeply nested component trees.