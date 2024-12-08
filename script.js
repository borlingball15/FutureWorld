window.onload = function() {
    // Fade in the title and subtitle when the page loads
    if (document.getElementById("title")) {
        document.getElementById("title").style.opacity = 1;
    }

    setTimeout(() => {
        if (document.getElementById("subtitle")) {
            document.getElementById("subtitle").style.opacity = 1;
        }

        // Fade in the bar container (with segments)
        if (document.getElementById("bar")) {
            document.getElementById("bar").style.opacity = 1;
        }
    }, 1000);

    // Start the typing effect for the subtitle
    typeText("subtitle", "Would you be a hero or a villain?");
};

// Function to simulate typing effect
function typeText(elementId, text) {
    console.log(elementId, text)
    const element = document.getElementById(elementId);
    let i = 0;
    console.log(document.getElementById())
    element.innerHTML = ""; // Clear any pre-existing content

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100); // Delay for each character
        }
    }

    type(); // Call the typing function
}

// Segment selection logic
let selectedSegment = null;

function selectSegment(segment) {
    selectedSegment = segment;
    document.getElementById("nextBtn").style.display = 'inline-block';
}

// Redirect based on the selected segment
document.getElementById("nextBtn") && (document.getElementById("nextBtn").onclick = function() {
    if (selectedSegment === 1) {
        window.location.href = "page1.html";  // Link to Segment 1
    } else if (selectedSegment === 2) {
        window.location.href = "page2.html";  // Link to Segment 2
    } else if (selectedSegment === 3) {
        window.location.href = "page3.html";  // Link to Segment 3
    }
});

// Back to Home Page (index.html)
function goBack() {
    window.location.href = "index.html";  // Navigate back to the main page
}
