function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("signupTab").classList.remove("active");
}

function showSignup() {
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupTab").classList.add("active");
    document.getElementById("loginTab").classList.remove("active");
}

// Password Validation
function validPassword(password) {
    return password.length >= 8 &&
           /[A-Z]/.test(password) &&
           /[0-9]/.test(password);
}

// Sign up Function
function signup() {
    const email = document.getElementById("signupEmail").value;
    const msg = document.getElementById("signupMsg");

    if (!email) {
        msg.textContent = "Email is required";
        return;
    }

    // Generate token
    const token = Math.random().toString(36).substring(2, 12);

    // Save verification flag (NOT email-based)
    localStorage.setItem("pending_verification", token);

    // Create verification link
    const verifyLink =
        `${window.location.origin}/verify.html?token=${token}`;

    emailjs.send("service_42ozpxs", "template_cvxct3r", {
        verify_link: verifyLink
    }).then(() => {
        alert("Verification email sent. Please check your inbox.");
    }).catch(() => {
        msg.textContent = "Failed to send verification email";
    });
}


// LOGIN
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const msg = document.getElementById("loginMsg");

    const user = JSON.parse(localStorage.getItem(email));

    if (!user) {
        msg.textContent = "User not found";
        return;
    }

    if (user.password !== password) {
        msg.textContent = "Incorrect password";
        return;
    }

    if (!user.verified) {
    msg.textContent = "Please verify your email first";
    return;
    }

    if (localStorage.getItem("email_verified") !== "true") {
    alert("Please verify your email first");
    return;
    }


    

    // Redirect to dashboard
    window.location.href = "dashboard.html";
}
