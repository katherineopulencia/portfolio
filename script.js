 // Projects data
    const projects = [
      {
        title: "Portfolio Website",
        description:
          "A personal portfolio website showcasing my skills, projects, and experience with a clean and modern design.",
        techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        image:
          "https://placehold.co/600x400/png?text=Screenshot+of+Portfolio+Website+with+clean+modern+design",
        link: "https://yourportfolio.com",
      },
      {
        title: "E-commerce Store",
        description:
          "Developed a fully responsive e-commerce store with shopping cart, product filters, and payment integration.",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        image:
          "https://placehold.co/600x400/png?text=Screenshot+of+E-commerce+Store+with+product+grid+and+filters",
        link: "https://myecommercestore.com",
      },
      {
        title: "UI/UX Design System",
        description:
          "Created a comprehensive design system with reusable components and style guidelines for a SaaS product.",
        techStack: ["Figma", "Adobe XD", "CSS Modules"],
        image:
          "https://placehold.co/600x400/png?text=Screenshot+of+UI+Design+System+with+components+and+color+palette",
        link: "https://designsystem.example.com",
      },
      {
        title: "Blog Platform",
        description:
          "Built a multi-user blog platform with markdown support, comments, and user authentication.",
        techStack: ["Next.js", "Firebase", "Tailwind CSS"],
        image:
          "https://placehold.co/600x400/png?text=Screenshot+of+Blog+Platform+with+posts+and+comments",
        link: "https://myblogplatform.com",
      },
      {
        title: "Task Management App",
        description:
          "A task management app with drag-and-drop interface, deadlines, and notifications.",
        techStack: ["Vue.js", "Vuex", "Firebase"],
        image:
          "https://placehold.co/600x400/png?text=Screenshot+of+Task+Management+App+with+drag+and+drop+tasks",
        link: "https://taskmanagerapp.com",
      },
      {
        title: "Restaurant Website",
        description:
          "Responsive website for a local restaurant featuring menu, reservations, and contact form.",
        techStack: ["HTML", "CSS", "JavaScript", "PHP"],
        image:
          "https://placehold.co/600x400/png?text=Screenshot+of+Restaurant+Website+with+menu+and+reservation+form",
        link: "https://localrestaurant.com",
      },
      {
        title: "Weather Dashboard",
        description:
          "Interactive weather dashboard showing current conditions and forecasts using external APIs.",
        techStack: ["React", "OpenWeatherMap API", "Tailwind CSS"],
        image:
          "https://placehold.co/600x400/png?text=Screenshot+of+Weather+Dashboard+with+charts+and+forecast",
        link: "https://weatherdashboard.com",
      },
      {
        title: "Fitness Tracker",
        description:
          "Mobile-friendly fitness tracker app with workout logging and progress charts.",
        techStack: ["React Native", "Redux", "Firebase"],
        image:
          "https://placehold.co/600x400/png?text=Screenshot+of+Fitness+Tracker+App+with+workout+logs",
        link: "https://fitnesstrackerapp.com",
      },
      {
        title: "Photography Portfolio",
        description:
          "A visually stunning portfolio website for a professional photographer with galleries and contact info.",
        techStack: ["Gatsby", "GraphQL", "CSS Modules"],
        image:
          "https://placehold.co/600x400/png?text=Screenshot+of+Photography+Portfolio+with+image+gallery",
        link: "https://photographyportfolio.com",
      },
    ];

    const projectsGrid = document.getElementById("projects-grid");

    projects.forEach((project) => {
      const card = document.createElement("article");
      card.className =
        "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow";

      card.innerHTML = `
        <img
          src="${project.image}"
          alt="Screenshot of project titled '${project.title}' showing a preview of the project interface"
          class="w-full h-48 object-cover"
          loading="lazy"
          width="600"
          height="400"
        />
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">${project.title}</h3>
          <p class="text-gray-700 dark:text-gray-300 flex-grow">${project.description}</p>
          <div class="mt-4">
            <h4 class="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">Tech Stack:</h4>
            <ul class="flex flex-wrap gap-2 text-sm text-indigo-700 dark:text-indigo-300 font-medium">
              ${project.techStack
                .map(
                  (tech) =>
                    `<li class="bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full">${tech}</li>`
                )
                .join("")}
            </ul>
          </div>
          <a
            href="${project.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            aria-label="Visit live site or GitHub repository for ${project.title}"
            >View Project &rarr;</a
          >
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // Mobile menu toggle
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        mobileMenu.hidden = true;
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.querySelector("i").classList.remove("fa-times");
        menuButton.querySelector("i").classList.add("fa-bars");
      } else {
        mobileMenu.hidden = false;
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.querySelector("i").classList.remove("fa-bars");
        menuButton.querySelector("i").classList.add("fa-times");
      }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.hidden = true;
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.querySelector("i").classList.remove("fa-times");
        menuButton.querySelector("i").classList.add("fa-bars");
      });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const darkModeIcon = document.getElementById("dark-mode-icon");

    // Initialize theme based on localStorage or system preference
    function setTheme(theme) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
        darkModeToggle.setAttribute("aria-label", "Switch to light mode");
        darkModeToggle.title = "Switch to light mode";
      } else {
        document.documentElement.classList.remove("dark");
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
        darkModeToggle.setAttribute("aria-label", "Switch to dark mode");
        darkModeToggle.title = "Switch to dark mode";
      }
    }

    function getPreferredTheme() {
      if (localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    }

    setTheme(getPreferredTheme());

    darkModeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark) {
        setTheme("light");
        localStorage.setItem("theme", "light");
      } else {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      }
    });