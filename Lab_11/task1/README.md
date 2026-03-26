# Lab 11.1

Student Name: YOUR_NAME  
Student ID: YOUR_ID  
Date: YOUR_DATE  

## Описание
В этой работе реализованы асинхронные паттерны на Promises:
- Promise-based HTTP client
- retry with exponential backoff
- timeout handling
- async queue with controlled concurrency

## Файлы
- async/PromiseHttpClient.js
- async/retry.js
- async/AsyncQueue.js
- index.html

## Как запустить
1. Открыть папку task1 в VS Code
2. Запустить Live Server для index.html
3. Открыть консоль браузера

## Когда использовать
- HTTP client: для запросов к API
- Retry: для временных сетевых ошибок
- Timeout: чтобы не ждать бесконечно
- Async Queue: чтобы ограничивать число параллельных задач