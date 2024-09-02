
    document.addEventListener('DOMContentLoaded', function () {
        
        
        
    // New preloader logic
    const preloader = document.getElementById('preloader');
    const aboveTheFoldElements = document.querySelectorAll('#masthead, #home_intro img'); // Select relevant above-the-fold elements

    let elementsLoaded = 0;

    aboveTheFoldElements.forEach((element) => {
        if (element.complete || element.readyState === 'complete') {
            elementsLoaded++;
        } else {
            element.addEventListener('load', () => {
                elementsLoaded++;
                if (elementsLoaded === aboveTheFoldElements.length) {
                    hidePreloader();
                }
            });
        }
    });

    // Hide the preloader if all elements are loaded already
    if (elementsLoaded === aboveTheFoldElements.length) {
        hidePreloader();
    }

    function hidePreloader() {
        preloader.style.display = 'none';
        document.body.classList.remove('preloader-active');
    }

        
        
        
        
        let slideIndex = 1;
        handleResize();

        window.addEventListener('resize', debounce(handleResize, 250));

        function handleResize() {
            createSlides();
            createDots();
            showSlide(slideIndex);
            bindSlideButtons();
        }

        function bindSlideButtons() {
            document.querySelector('.prev').onclick = function() { changeSlide(-1); };
            document.querySelector('.next').onclick = function() { changeSlide(1); };
        }

        function createSlides() {
            const viewportWidth = window.innerWidth;
            const perSlide = viewportWidth > 900 ? 2 : 1;
            const testimonials = document.querySelectorAll('.testimonial-wrapper');
            const sliderContainer = document.querySelector('.slides');
            sliderContainer.innerHTML = '';

            for (let i = 0; i < testimonials.length; i += perSlide) {
                const slide = document.createElement('div');
                slide.className = 'slide';
                for (let j = 0; j < perSlide && (i + j) < testimonials.length; j++) {
                    slide.appendChild(testimonials[i + j].cloneNode(true));
                }
                sliderContainer.appendChild(slide);
            }
        }

        function createDots() {
            const slides = document.getElementsByClassName("slide");
            const dotsContainer = document.querySelector(".slider-dots");
            dotsContainer.innerHTML = '';
            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement("span");
                dot.classList.add("dot");
                dot.onclick = function () { currentSlide(i + 1); };
                dotsContainer.appendChild(dot);
            }
        }

        function currentSlide(n) {
            showSlide(slideIndex = n);
        }

        function changeSlide(n) {
            showSlide(slideIndex += n);
        }

        function showSlide(n) {
            const slides = document.getElementsByClassName("slide");
            const dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }
            Array.from(slides).forEach(slide => slide.style.display = "none");
            Array.from(dots).forEach(dot => dot.className = dot.className.replace(" active", ""));
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

        function debounce(func, wait, immediate) {
            let timeout;
            return function() {
                const context = this, args = arguments;
                const later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }

        // Dropdown menu handling
        const dropdown = document.querySelector('.dropdown');
        const dropbtn = dropdown.querySelector('.dropbtn');
        const arrow = document.querySelector('.dropdown-arrow');

        dropbtn.addEventListener('click', function(event) {
            arrow.classList.toggle('transformed');
            dropdown.classList.toggle('expanded');
        });

        // Copy email to clipboard and show tooltip
        function copyEmailToClipboard() {
            const email = "luca.kahim.luk@gmail.com";

            // Copy email to clipboard
            const tempInput = document.createElement("input");
            tempInput.style = "position: absolute; left: -1000px; top: -1000px";
            tempInput.value = email;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);

            // Show tooltip
            const tooltip = document.getElementById("tooltip");
            tooltip.classList.add("tooltip-visible");

            // Hide tooltip after 2 seconds
            setTimeout(function() {
                tooltip.classList.remove("tooltip-visible");
            }, 2000);
        }

        

        // Attach event listener to email icon
        const emailIcon = document.querySelector('[onclick="copyEmailToClipboard()"]');
        if (emailIcon) {
            emailIcon.addEventListener('click', copyEmailToClipboard);
        }
    });
