const profiles = [
  {
    fullName: "Emma Watson",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
    profession: "UI/UX Designer",
    description:
      "Designs clean and user-friendly interfaces with a strong focus on accessibility and usability.",
    tags: ["UI", "UX", "Figma", "Accessibility"],
  },
  {
    fullName: "Liam Carter",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
    profession: "Frontend Developer",
    description:
      "Builds responsive and interactive web applications using modern JavaScript frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    fullName: "Sophia Martinez",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    profession: "Content Creator",
    description:
      "Creates engaging digital content with a focus on storytelling and brand growth.",
    tags: ["Content", "Branding", "Social Media"],
  },
  {
    fullName: "Noah Anderson",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    profession: "Product Manager",
    description:
      "Bridges the gap between business goals and technical execution through clear product vision.",
    tags: ["Product", "Agile", "Strategy"],
  },
  {
    fullName: "Ava Johnson",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    profession: "Digital Marketer",
    description:
      "Specializes in performance marketing and data-driven campaign optimization.",
    tags: ["SEO", "Marketing", "Analytics"],
  },
];

var sum = "";

profiles.forEach(function (elem) {
  sum =
    sum +
    `<div class="card">
      <img src="${elem.image}" alt="">
      <h3>${elem.fullName}</h3>
      <h4>${elem.profession}</h4>
      <p>${elem.description}</p>
    </div>`;
});

console.log(sum);

var main = document.querySelector("main");

main.innerHTML = sum;
