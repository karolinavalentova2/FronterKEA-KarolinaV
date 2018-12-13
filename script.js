function addMessage() {
	const newPost = document.getElementById('newPost');
	const newMessage = document.getElementById('message-content');
	const messageToPost = document.getElementById('newMessageToPost').value;
	
	const node = document.createTextNode(messageToPost);
	newMessage.appendChild(node);
	
	newPost.className = "showData";
}

function doLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if(username === "kea" && password === "kea") {
        const toast = document.getElementById("success");
        toast.className = "show";
        setTimeout(() => {
            toast.className = toast.className.replace("show", "");
        }, 1500);
        setTimeout("location.href = 'home.html';",1800);
    } else {
        const toast = document.getElementById("fail");
        toast.className = "show";
        setTimeout(() => {
            toast.className = toast.className.replace("show", "");
        }, 1500);
    }
}

