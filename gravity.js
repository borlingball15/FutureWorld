// // Fetch data from the JSON file
// fetch('conditions.json') // Ensure this is the correct path to your JSON file
//     .then(async response => {
//         const json = await response.json()
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return json;
//     })
//     .then(data => {
//         // Assuming you're on the 0% Gravity page
//         console.log('dataaa', data.data.conditions[0])
//         const zeroGravity = data.data.conditions[0];

//         // Get the content element
//         const contentElement = document.getElementById('content');

//         // Check if the element exists
//         if (!contentElement) {
//             console.error("No content element found!");
//             return;
//         }

//         // Generate and insert the content
//         contentElement.innerHTML = `
//             <h1>0% Gravity</h1>
//             <p><strong>Population:</strong> ${zeroGravity.population}</p>
//             <p><strong>Weather:</strong> ${zeroGravity.weather}</p>
//             <p><strong>Emotions:</strong> ${zeroGravity.emotions}</p>
//             <p><strong>Short Term Benefits:</strong> ${zeroGravity.shortTermBenefits}</p>
//             <p><strong>Long Term Benefits:</strong> ${zeroGravity.longTermBenefits}</p>
//             <p><strong>Existential Crisis:</strong> ${zeroGravity.existentialCrisis}</p>
//         `;
//     })
//     .catch(error => {
//         console.error("Error fetching data:", error);
//     });

// async function getData() {
//  ///   const url = "conditions.json";
//     ///try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error("error",error.message);
//     }
//   }

// Typing effect using GSAP
// gsap.fromTo(
//     ".anim-typewriter",
//     { width: "0" }, // Start state
//     {
//         width: "30em", // Match .line-1 width
//         duration: 4, // Duration of animation in seconds
//         ease: "steps(30)", // Steps for the typing effect
//         onComplete: () => {
//             console.log("Typing effect complete!");
//         },
//     }
// );

// // Cursor blink animation
// gsap.fromTo(
//     ".line-1",
//     { "border-right-color": "rgba(255, 255, 255, 0.75)" },
//     {
//         "border-right-color": "rgba(255, 255, 255, 0)",
//         repeat: -1,
//         duration: 0.5,
//         ease: "steps(2)",
//     }
// );

// Show the popup when the button is clicked
document.getElementById("popup-btn").addEventListener("click", function() {
    const popup = document.getElementById("popup");
    popup.style.display = "block"; // Show the popup

    // Using GSAP Timeline for staggered typing effect
    const tl = gsap.timeline();

    // Select all paragraphs with the "anim-typewriter" class within the popup
    const lines = popup.querySelectorAll(".line-1.anim-typewriter");

    // Apply the stagger animation
    lines.forEach((line, index) => {
        tl.fromTo(
            line,
            { width: "0", overflow: "hidden", borderRight: "2px solid rgba(255,255,255,0.75)" },
            { 
                width: "100%", 
                ease: "steps(20)", 
                duration: 2, 
                onComplete: () => line.style.borderRight = "none" 
            },
            index * 2 // Stagger effect: delay based on index
        );
    });
});

// Close the popup when the close button is clicked
document.getElementById("closePopupButton").addEventListener("click", function() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Hide the popup
});
