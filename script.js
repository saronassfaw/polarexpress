function toggleTravelersSelector() {
  const travelersOptions = document.getElementById("travelersOptions");
  travelersOptions.classList.toggle("show");
}

function updateTravelers(type, action) {
  const travelersElement = document.getElementById(type);
  let currentCount = parseInt(travelersElement.innerText.split(": ")[1]);

  if (action === "add") {
    currentCount += 1;
  } else if (action === "subtract" && currentCount > 0) {
    currentCount -= 1;
  }

  travelersElement.innerText = `${
    type.charAt(0).toUpperCase() + type.slice(1)
  }: ${currentCount}`;
  updateTotalTravelers();
}

function updateTotalTravelers() {
  const adults = parseInt(
    document.getElementById("adults").innerText.split(": ")[1]
  );
  const seniors = parseInt(
    document.getElementById("seniors").innerText.split(": ")[1]
  );
  const children = parseInt(
    document.getElementById("children").innerText.split(": ")[1]
  );

  const totalTravelers = adults + seniors + children;
  document.getElementById("travelers").value = `${totalTravelers} ${
    totalTravelers === 1 ? "Traveler" : "Travelers"
  }`;
}

flatpickr("#datepicker", {});

// Add event listener to close travelers options when clicking outside
document.body.addEventListener('click', function(event) {
  const travelersInput = document.getElementById('travelers');
  const travelersOptions = document.getElementById('travelersOptions');
  if (event.target !== travelersInput && !travelersOptions.contains(event.target)) {
    travelersOptions.classList.remove('show');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const animatedElements = document.querySelectorAll(".animated");

  function checkScroll() {
    animatedElements.forEach(element => {
      if (isElementInViewport(element) && !element.classList.contains("animate")) {
        element.classList.add("animate");
      }
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);


  checkScroll();
});

function toggleSideBar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}
