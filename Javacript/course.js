  // Navbar functionality
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');
            
            // Hamburger menu toggle
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Course rendering and filtering
            const courses = [
                {
                    id: 1,
                    title: 'Introduction to Python Programming',
                    category: 'Coding',
                    difficulty: 'Beginner',
                    description: 'Learn the basics of Python programming, including syntax, variables, and functions.',
                    instructor: '',
                    rating: 4.5,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZqZkpMyiN2uSuT7GAf6JSkJ44YsZqoQHdw&s',
                    duration: '4 weeks',
                    lessons: 12,
                    price: '$49.99',
                    level: 'Beginner',
                    details: 'This course introduces you to Python programming. You will learn the fundamentals including syntax, variables, loops, and functions, with hands-on projects to solidify your skills.',
                    youtubeLink: 'https://www.youtube.com/watch?v=rfscVS0vtbw'
                },
                {
                    id: 2,
                    title: 'Advanced Web Development',
                    category: 'Web Development',
                    difficulty: 'Advanced',
                    description: 'Master modern web technologies like React, Node.js, and advanced CSS.',
                    instructor: '',
                    rating: 4.8,
                    image: 'https://miro.medium.com/0*M4bxiCIjcTK-2Xr6.jpeg',
                    duration: '6 weeks',
                    lessons: 18,
                    price: '$89.99',
                    level: 'Advanced',
                    details: 'Dive deep into modern web development with React, Node.js, and advanced CSS techniques. Build real-world projects and learn best practices for scalable applications.',
                    youtubeLink: 'https://www.youtube.com/watch?v=bMknfKXIFA8'
                },
                {
                    id: 3,
                    title: 'Data Science with R',
                    category: 'Data Science',
                    difficulty: 'Intermediate',
                    description: 'Explore data analysis and visualization using R programming language.',
                    instructor: '',
                    rating: 4.3,
                    image: 'https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg',
                    duration: '5 weeks',
                    lessons: 15,
                    price: '$69.99',
                    level: 'Intermediate',
                    details: 'Learn data analysis, visualization, and statistical modeling using R. This course covers data manipulation, exploratory data analysis, and creating insightful visualizations.',
                    youtubeLink: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI'
                },
                {
                    id: 4,
                    title: 'Business Analytics Fundamentals',
                    category: 'Business',
                    difficulty: 'Beginner',
                    description: 'Understand key business analytics concepts and tools to drive decisions.',
                    instructor: '',
                    rating: 4.6,
                    image: 'https://images.ctfassets.net/pdf29us7flmy/5iQM8DSaB5iF4Gd9lcJiSy/340379739c3bf1758ba1b3635716660a/business-analyst-skills.png',
                    duration: '3 weeks',
                    lessons: 10,
                    price: '$39.99',
                    level: 'Beginner',
                    details: 'Get started with business analytics, covering key concepts, tools, and techniques to make data-driven decisions in a business environment.',
                    youtubeLink: 'https://www.youtube.com/watch?v=2XL_xP-0CSQ'
                },
              
            ];

            const coursesGrid = document.getElementById('courses-grid');
            const searchInput = document.getElementById('search-input');
            const categoryFilter = document.getElementById('category-filter');
            const difficultyFilter = document.getElementById('difficulty-filter');
            const pagination = document.getElementById('pagination');
            const coursesLoading = document.getElementById('courses-loading');
            const noCoursesError = document.getElementById('no-courses-error');

            const coursesPerPage = 3;
            let currentPage = 1;
                           // /pagination and rendering 
            function renderCourses(filteredCourses) {
                coursesGrid.innerHTML = '';
                const start = (currentPage - 1) * coursesPerPage;
                const end = start + coursesPerPage;
                const paginatedCourses = filteredCourses.slice(start, end);
                if (paginatedCourses.length === 0) {
                    noCoursesError.style.display = 'block';
                    pagination.style.display = 'none';
                    return;
                }
                noCoursesError.style.display = 'none';
                pagination.style.display = 'flex';
                paginatedCourses.forEach(course => {
                    const courseCard = document.createElement('div');
                    courseCard.classList.add('course-card');
                    courseCard.innerHTML = `
                        <div class="course-image">
                            <img src="${course.image}" alt="${course.title}">
                        </div>
                        <div class="course-content">
                            <span class="course-category">${course.category}</span>
                            <h3 class="course-title">${course.title}</h3>
                            <p class="course-description">${course.description}</p>
                            <span>${course.price}</span>
                            <div class="course-meta">
                                <div class="course-instructor">
                                     <span><span><i class="fa-solid fa-user-tie"></i>Saran Anil</span>${course.instructor}</span>
                                </div>
                                <div class="course-rating">
                                    <i class="fas fa-star"></i>
                                    <span>${course.rating}</span>
                                </div>
                               
                            </div>
                        </div>
                    `;
                    courseCard.addEventListener('click', () => {
                        window.location.href = `course-details.html?id=${course.id}`;
                    });
                    coursesGrid.appendChild(courseCard);
                });
                renderPagination(filteredCourses.length);
            }

            function renderPagination(totalCourses) {
                pagination.innerHTML = '';
                const totalPages = Math.ceil(totalCourses / coursesPerPage);
                const prevButton = document.createElement('button');
                prevButton.classList.add('pagination-btn');
                prevButton.textContent = 'Previous';
                prevButton.disabled = currentPage === 1;
                if (prevButton.disabled) prevButton.classList.add('disabled');
                prevButton.addEventListener('click', () => {
                    if (currentPage > 1) {
                        currentPage--;
                        filterAndRenderCourses();
                    }
                });
                pagination.appendChild(prevButton);
                for (let i = 1; i <= totalPages; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.classList.add('pagination-btn');
                    if (i === currentPage) pageButton.classList.add('active');
                    pageButton.textContent = i;
                    pageButton.addEventListener('click', () => {
                        currentPage = i;
                        filterAndRenderCourses();
                    });
                    pagination.appendChild(pageButton);
                }
                const nextButton = document.createElement('button');
                nextButton.classList.add('pagination-btn');
                nextButton.textContent = 'Next';
                nextButton.disabled = currentPage === totalPages;
                if (nextButton.disabled) nextButton.classList.add('disabled');
                nextButton.addEventListener('click', () => {
                    if (currentPage < totalPages) {
                        currentPage++;
                        filterAndRenderCourses();
                    }
                });
                pagination.appendChild(nextButton);
            }

            function filterAndRenderCourses() {
                const searchTerm = searchInput.value.toLowerCase();
                console.log('Searched:', searchTerm);
                const selectedCategory = categoryFilter.value;
                const selectedDifficulty = difficultyFilter.value;
                let filteredCourses = courses;
                if (searchTerm) {
                    filteredCourses = filteredCourses.filter(course =>
                        course.title.toLowerCase().includes(searchTerm) ||
                        course.description.toLowerCase().includes(searchTerm)
                    );
                }
                if (selectedCategory !== 'all') {
                    filteredCourses = filteredCourses.filter(course => course.category === selectedCategory);
                }
                if (selectedDifficulty !== 'all') {
                    filteredCourses = filteredCourses.filter(course => course.difficulty === selectedDifficulty);
                }
                renderCourses(filteredCourses);
            }

            searchInput.addEventListener('input', () => {
                currentPage = 1;
                filterAndRenderCourses();
            });

            categoryFilter.addEventListener('change', () => {
                currentPage = 1;
                filterAndRenderCourses();
            });

            difficultyFilter.addEventListener('change', () => {
                currentPage = 1;
                filterAndRenderCourses();
            });


            // loading time
            coursesLoading.classList.add('active');
            setTimeout(() => {
                coursesLoading.classList.remove('active');
                filterAndRenderCourses();
            }, 1000);  // 1 second loading time 
        });