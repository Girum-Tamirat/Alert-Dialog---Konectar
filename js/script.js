document.addEventListener("DOMContentLoaded", () => {
  // Get references to elements
  const continueBtn = document.getElementById("continueBtn");
  const alertDialog = document.getElementById("alertDialog");

  // Function to create overlay modal
  const createOverlayModal = () => {
    // Create a dark background layer
    const overlayBackground = document.createElement("div");
    overlayBackground.classList.add("overlay-background");

    // Clone the alertDialog modal
    const overlay = alertDialog.cloneNode(true);
    overlay.id = "alertDialogOverlay"; // New id for the overlay

    // Find buttons in the overlay
    const overlayContinueBtn = overlay.querySelector("#continueBtn");
    const overlayCancelBtn = overlay.querySelector("#cancelBtn");

    // Add click events to overlay buttons
    overlayContinueBtn.addEventListener("click", () => {
      alert("Continue clicked");
      document.body.removeChild(overlayBackground); // Remove the background layer
      document.body.removeChild(overlay); // Remove overlay
    });

    overlayCancelBtn.addEventListener("click", () => {
      document.body.removeChild(overlayBackground); // Remove the background layer
      document.body.removeChild(overlay); // Remove overlay
    });

    // Append the overlay and background layer to the body
    document.body.appendChild(overlayBackground);
    document.body.appendChild(overlay);

    // Inside the createOverlayModal function:
    overlay.classList.add("overlay-modal");

    };

    // Event listener for the first modal's continue button
    continueBtn.addEventListener("click", createOverlayModal);
  });
