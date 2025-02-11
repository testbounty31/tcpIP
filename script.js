document.getElementById("startSimulation").addEventListener("click", startSimulation);

function startSimulation() {
    let networkBox = document.getElementById("networkInterface");
    let internetBox = document.getElementById("internetLayer");
    let transportBox = document.getElementById("transportLayer");
    let applicationBox = document.getElementById("applicationLayer");
    
    networkBox.innerHTML = "1. Network Interface Layer: Sending signals over physical media...";
    setTimeout(() => {
        networkBox.innerHTML += "\n- MAC Address Example: 00:1A:2B:3C:4D:5E";
    }, 2000);
    
    setTimeout(() => {
        internetBox.innerHTML = "2. Internet Layer: Routing packets using IP...";
        internetBox.innerHTML += "\n- Source IP: 192.168.1.10, Destination IP: 203.0.113.5";
    }, 5000);
    
    setTimeout(() => {
        transportBox.innerHTML = "3. Transport Layer: Initiating TCP Handshake...";
        transportBox.innerHTML += "\n- SYN sent (Client -> Server)";
    }, 8000);
    setTimeout(() => {
        transportBox.innerHTML += "\n- SYN-ACK received (Server -> Client)";
    }, 11000);
    setTimeout(() => {
        transportBox.innerHTML += "\n- ACK sent (Client -> Server) - Connection Established!";
    }, 14000);
    
    setTimeout(() => {
        applicationBox.innerHTML = "4. Application Layer: HTTP Request Processing...";
        applicationBox.innerHTML += "\n- HTTP Headers Sent (Host, User-Agent, Accept, etc.)";
    }, 17000);
    setTimeout(() => {
        applicationBox.innerHTML += "\n- Secure TLS Handshake Initiated...";
    }, 20000);
    setTimeout(() => {
        applicationBox.innerHTML += "\n- TLS Handshake Completed. Encrypted Connection Established.";
    }, 23000);
    setTimeout(() => {
        applicationBox.innerHTML += "\n- HTTP GET Request Sent to Server!";
    }, 26000);
}
