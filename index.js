let messageIndex = 0;
        const messages = [
            `"The best revenge is massive success."
 --Frank Sinatra`,
 `"Resentment is like drinking poison and waiting for your enemies to die."
 --Nelson Mandela`,
 `"It's not what happens to you, but how you react to it that matters."
 --Epictetus`,
 `"You miss 100% of the shots you don't take."
 --Wayne Gretzy`,
 `"Do not take life too seriously. You will not get out alive."
 --Elbert Hubbard`,
        ];

        const button = document.getElementById("myButton");
        const messageParagraph = document.getElementById("message");

        button.addEventListener("click", function() {
            messageParagraph.textContent = messages[messageIndex];
            messageIndex = (messageIndex + 1) % messages.length;
        });
