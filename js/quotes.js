const quotes = [
    {
        quote : "1수동적으로가 아니라 능동적으로 살자.",
        author: "파멀리."
    },
    {
        quote : "2수동적으로가 아니라 능동적으로 살자.",
        author: "2파멀리."
    },
    {
        quote : "3수동적으로가 아니라 능동적으로 살자.",
        author: "파멀리."
    },
    {
        quote : "4수동적으로가 아니라 능동적으로 살자.",
        author: "파멀리."
    },
    {
        quote : "5수동적으로가 아니라 능동적으로 살자.",
        author: "파멀리."
    },
    {
        quote : "6수동적으로가 아니라 능동적으로 살자.",
        author: "파멀리."
    },
    {
        quote : "7수동적으로가 아니라 능동적으로 살자.",
        author: "파멀리."
    },
    {
        quote : "8수동적으로가 아니라 능동적으로 살자.",
        author: "파멀리."
    },
    {
        quote : "9수동적으로가 아니라 능동적으로 살자.",
        author: "파멀리."
    },
    {
        quote : "0수동적으로가 아니라 능동적으로 살자.",
        author: "파멀리."
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;