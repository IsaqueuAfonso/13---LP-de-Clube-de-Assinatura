const pricing = document.querySelector("#pricing");
const monthly = document.querySelector(".monthly");
const annual = document.querySelector(".annual");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        monthly.style.animation = "move-monthly 2s forwards";
        annual.style.animation = "move-annual 2s forwards";

        observer.unobserve(pricing);
      }
    });
  },
  { threshold: 0.2 }
);

observer.observe(pricing);
