
const galleryData = [
  {
    src: "assets/image-1.jpg",
    alt: "Web Design Project",
    title: "Modern Web Design",
    description: "Responsive website with clean UI/UX"
  },
  {
    src: "assets/image-2.jpg",
    alt: "Mobile App",
    title: "Mobile Application",
    description: "iOS and Android app development"
  },
  {
    src: "assets/image-3.jpg",
    alt: "E-commerce Platform",
    title: "E-commerce Platform",
    description: "Full-stack online store solution"
  },
  {
    src: "assets/image-4.jpg",
    alt: "Brand Identity",
    title: "Brand Identity",
    description: "Logo design and brand guidelines"
  },
  {
    src: "assets/image-5.jpg",
    alt: "Data Visualization",
    title: "Data Visualization",
    description: "Interactive charts and dashboards"
  },
  {
    src: "assets/image-6.jpg",
    alt: "Photography Portfolio",
    title: "Photography Portfolio",
    description: "Creative photography showcase"
  },
  {
    src: "assets/image-7.jpg",
    alt: "Backend Development",
    title: "Backend Development",
    description: "API and server-side solutions"
  },
  {
    src: "assets/image-8.jpg",
    alt: "UI/UX Design",
    title: "UI/UX Design",
    description: "User interface and experience design"
  },
  {
    src: "assets/image-4.jpg",
    alt: "Digital Marketing",
    title: "Digital Marketing",
    description: "Social media and campaign design"
  },
  {
    src: "assets/image-5.jpg",
    alt: "Print Design",
    title: "Print Design",
    description: "Brochures, flyers, and print materials"
  }
];

const galleryGrid = document.getElementById("galleryGrid");

galleryData.forEach((item, index) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery-item";
  galleryItem.style.animationDelay = `${0.1 * (index + 1)}s`;

  galleryItem.innerHTML = `
        <div class="image-number"></div>
        <img src="${item.src}" alt="${item.alt}" loading="lazy">
        <div class="image-overlay">
          <div class="image-title">${item.title}</div>
          <div class="image-description">${item.description}</div>
        </div>
      `;

  galleryGrid.appendChild(galleryItem);
});
