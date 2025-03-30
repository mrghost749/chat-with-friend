<script>
  function sendMessage() {
    let messageInput = document.getElementById("message");
    let messageText = messageInput.value.trim();
    if (messageText === "") return;

    database.ref("messages").push().set({
      message: messageText
    });

    messageInput.value = "";
  }

  // Fetch messages from Firebase
  database.ref("messages").on("child_added", function(snapshot) {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("div");
    messageElement.style.padding = "10px";
    messageElement.style.margin = "5px";
    messageElement.style.background = "#007bff";
    messageElement.style.color = "white";
    messageElement.style.borderRadius = "5px";
    messageElement.style.textAlign = "right";
    messageElement.textContent = snapshot.val().message;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  });
</script>
