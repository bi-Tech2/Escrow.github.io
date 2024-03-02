function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
  }

  async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    // Get user input and add it to the chat
    const userMessage = userInput.value;`<br>`
    chatMessages.innerHTML += `<br><p><strong>You:</strong> ${userMessage}</p><br>`;

    // Use your AI function here and add AI response to the chat with typing effect
    const aiResponse = await getAIResponse(userMessage);
    simulateTypingEffect(chatMessages, `BiTech:  ${aiResponse}`);

    // Clear user input
    userInput.value = '';
  }

  async function simulateTypingEffect(element, text) {
    const delay = 50; // Adjust the typing speed (in milliseconds)
    for (const char of text) {
      await sleep(delay);
      element.innerHTML += char;
    }
    // Remove the blinking caret after the typing effect is done
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function getAIResponse(userMessage) {
    const lowerCaseUserMessage = userMessage.toLowerCase();
    if (lowerCaseUserMessage.includes('hello') || lowerCaseUserMessage.includes('hi') || lowerCaseUserMessage.includes('hey') || lowerCaseUserMessage.includes('hola') || lowerCaseUserMessage.includes('yo')) {
      return 'Hello! How can I assist you with our escrow services?';
    } else if (lowerCaseUserMessage.includes('bye') || lowerCaseUserMessage.includes('goodbye') || lowerCaseUserMessage.includes('bye bye') || lowerCaseUserMessage.includes('see ya') || lowerCaseUserMessage.includes('take care')) {
      return 'Goodbye! If you need further assistance, feel free to reach out.';
    } else if (lowerCaseUserMessage.includes('Where can I initiate an escrow transaction?') || lowerCaseUserMessage.includes('how can I initiate an escrow transaction?') || lowerCaseUserMessage.includes('how can I make a transaction?') || lowerCaseUserMessage.includes('where can I can transaction?')) {
      return 'Where and how can I initiate an escrow transaction?';
    } else if (lowerCaseUserMessage.includes('tf') || lowerCaseUserMessage.includes('wtf') || lowerCaseUserMessage.includes('fuck') || lowerCaseUserMessage.includes('nude') || lowerCaseUserMessage.includes('xxx') || lowerCaseUserMessage.includes('sex') || lowerCaseUserMessage.includes('hoe') || lowerCaseUserMessage.includes('nigga') || lowerCaseUserMessage.includes('puke') || lowerCaseUserMessage.includes('dick') || lowerCaseUserMessage.includes('pussy')) {
      return "I'm sorry, I'm not sure I understand. Could you please clarify your question regarding our escrow services?";
    } else if (lowerCaseUserMessage.includes('What are the payment options') || lowerCaseUserMessage.includes('are there any associated fees for using our escrow services?') || lowerCaseUserMessage.includes('can i make a transfer?') || lowerCaseUserMessage.includes('can i pay using bitcoin?')) {
      return 'What are the payment options available, and are there any associated fees for using our escrow services?';
    } else if (lowerCaseUserMessage.includes('security') || lowerCaseUserMessage.includes('safety')) {
      return 'How secure is the escrow process, and what measures are in place to ensure the safety of transactions?';
    } else if (lowerCaseUserMessage.includes('cancel') || lowerCaseUserMessage.includes('refund')) {
      return 'What is the process for canceling an escrow transaction or requesting a refund?';
    } else if (lowerCaseUserMessage.includes('verification') || lowerCaseUserMessage.includes('account')) {
      return 'Is account verification required, and what steps are involved in verifying my escrow account?';
    } else if (lowerCaseUserMessage.includes('time') || lowerCaseUserMessage.includes('duration')) {
      return 'How long does the escrow process typically take, and are there any factors that may affect the duration?';
    } else if (lowerCaseUserMessage.includes('contact') || lowerCaseUserMessage.includes('support')) {
      return 'How can I contact customer support for assistance with my escrow-related inquiries?';
    } else {
      return "I'm sorry, I can't help you with: " + userMessage + ". If you have escrow-related questions, feel free to ask.";
    }
  }


  // async function getAIResponse(userMessage) {
  //   // Check for specific user inputs and return corresponding responses
  //   const lowerCaseUserMessage = userMessage.toLowerCase();
  //   if (lowerCaseUserMessage.includes("work") || lowerCaseUserMessage.includes('help')) {
  //     return 'with what?';
  //   } else if (lowerCaseUserMessage.includes('love') || lowerCaseUserMessage.includes('hate')) {
  //     return 'Alaye I no get feelings!';
  //   } else {
  //     return 'I no know wetin be: ' + userMessage;
  //   }
  // }

// Get the AI bot container
// Get the AI bot container
const aibotContainer = document.getElementById('aibot-container');

// Get the footer
const footer = document.querySelector('footer');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Calculate the positions
  const aibotBottom = aibotContainer.getBoundingClientRect().bottom;
  const footerTop = footer.getBoundingClientRect().top;

  // Check if the AI bot is above the footer
  if (aibotBottom > footerTop) {
    // Add the 'hidden' class to make the AI bot disappear
    aibotContainer.classList.add('hidden');
  } else {
    // Remove the 'hidden' class to make the AI bot appear
    aibotContainer.classList.remove('hidden');
  }
});



function toggleDropdown(dropdown) {
    dropdown.classList.toggle('active');
  }

  // Close dropdowns when clicking outside
  window.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
      }
    });
  });