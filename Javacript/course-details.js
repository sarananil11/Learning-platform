   document.addEventListener('DOMContentLoaded', () => {
            const courses = [
                {
                    id: 1,
                    title: 'Introduction to Python Programming',
                    category: 'Coding',
                    difficulty: 'Beginner',
                    description: 'Learn the basics of Python programming, including syntax, variables, and functions.',
                    instructor: 'Aswathi K',
                    rating: 4.5,
                    youtubeLink: 'https://www.youtube.com/embed/K5KVEU3aaeQ',  
                    duration: '4 weeks',
                    lessons: 12,
                    price: '$49.99',
                    level: 'Beginner',
                    details: 'This course introduces you to Python programming. You will learn the fundamentals including syntax, variables, loops, and functions, with hands-on projects to solidify your skills.',
                    progress: 0
                },
                {
                    id: 2,
                    title: 'Advanced Web Development',
                    category: 'Web Development',
                    difficulty: 'Advanced',
                    description: 'Master modern web technologies like React, Node.js, and advanced CSS.',
                    instructor: 'Nihala AT',
                    rating: 4.8,
                    youtubeLink: 'https://www.youtube.com/embed/3JluqTojuME', 
                    duration: '6 weeks',
                    lessons: 18,
                    price: '$89.99',
                    level: 'Advanced',
                    details: 'Dive deep into modern web development with React, Node.js, and advanced CSS techniques. Build real-world projects and learn best practices for scalable applications.',
                    progress: 0
                },
                {
                    id: 3,
                    title: 'Data Science with R',
                    category: 'Data Science',
                    difficulty: 'Intermediate',
                    description: 'Explore data analysis and visualization using R programming language.',
                    instructor: 'Chriz Annet',
                    rating: 4.3,
                    youtubeLink: 'https://www.youtube.com/embed/umI0DpJEqPE', 
                    duration: '5 weeks',
                    lessons: 15,
                    price: '$69.99',
                    level: 'Intermediate',
                    details: 'Learn data analysis, visualization, and statistical modeling using R. This course covers data manipulation, exploratory data analysis, and creating insightful visualizations.',
                    progress: 0
                },
                {
                    id: 4,
                    title: 'Business Analytics Fundamentals',
                    category: 'Business',
                    difficulty: 'Beginner',
                    description: 'Understand key business analytics concepts and tools to drive decisions.',
                    instructor: 'Abhilash Nair',
                    rating: 4.6,
                    youtubeLink: 'https://www.youtube.com/embed/diaZdX1s5L4', 
                    duration: '3 weeks',
                    lessons: 10,
                    price: '$39.99',
                    level: 'Beginner',
                    details: 'Get started with business analytics, covering key concepts, tools, and techniques to make data-driven decisions in a business environment.',
                    progress: 0
                },
              
                  
            ];

            // DOM elements
            const courseLoading = document.getElementById('course-loading');
            const courseDetailsContent = document.getElementById('course-details-content');
            const courseVideo = document.getElementById('course-video');
            const courseTitle = document.getElementById('course-title');
            const courseLessons = document.getElementById('course-lessons');
            const courseDuration = document.getElementById('course-duration');
            const courseInstructor = document.getElementById('course-instructor');
            const courseRating = document.getElementById('course-rating');
            const courseCategory = document.getElementById('course-category');
            const courseLevel = document.getElementById('course-level');
            const coursePrice = document.getElementById('course-price');
            const courseDescription = document.getElementById('course-description');
            const courseDetails = document.getElementById('course-details');

            // Get course ID from URL
            const urlParams = new URLSearchParams(window.location.search);
            const courseId = parseInt(urlParams.get('id'));

            // Find the course
            const course = courses.find(c => c.id === courseId);

            // Render course details
            if (course) {
                courseLoading.style.display = 'none';
                courseDetailsContent.style.display = 'grid';
                courseVideo.src = course.youtubeLink;
                courseVideo.title = course.title + ' Video';
                courseTitle.textContent = course.title;
                courseLessons.textContent = course.lessons;
                courseDuration.textContent = course.duration;
                courseInstructor.textContent = course.instructor;
                courseRating.textContent = course.rating;
                courseCategory.textContent = course.category;
                courseLevel.textContent = course.level;
                coursePrice.textContent = course.price;
                courseDescription.textContent = course.description;
                courseDetails.textContent = course.details;
            } else {
                courseLoading.style.display = 'none';
                courseError.style.display = 'block';
            }

            // Hamburger 
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        });