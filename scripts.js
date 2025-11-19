            //swipe up
            const swipeButton = document.getElementById("swipeButton");
            const slidingContent = document.getElementById("slidingContent");

            swipeButton.addEventListener("click", () => slidingContent.scrollIntoView({behavior: "smooth"}));

            //main menu
            const menuButton = document.getElementById("menuButton");
            const menuDropdown = document.getElementById("menuDropdown");

            menuButton.addEventListener("click", () => menuDropdown.classList.toggle("show"));

            document.addEventListener("click", (e) => {
                if(!menuButton.contains(e.target) && !menuDropdown.contains(e.target)) {
                    menuDropdown.classList.remove("show");
                }
            })

            //looping navigation
            const listItem = [
                {iconClass: "round home-menu brown nav-button", text:"Home", link:"#slidingContent"},
                {iconClass: "round chara-menu brown nav-button", text:"Characters", link:"#characters"},
                {iconClass: "round arcs-menu brown nav-button", text:"Arcs", link:"#arcs"},
                {iconClass: "round defruit-menu brown nav-button", text:"Devil's Fruit", link:"#defruit"}
            ];

            const menuList = document.getElementById("menuList");

            listItem.forEach(item => {
                const li = document.createElement("li");
                
                const a = document.createElement("a");
                a.href = item.link;
                
                const i = document.createElement("i");
                i.className = item.iconClass;
                
                const span = document.createElement("span");
                span.textContent = item.text;

                a.appendChild(i);
                a.appendChild(span);

                li.appendChild(a);

                menuList.appendChild(li);
            })

            //slider
            let slideIndex = 0;
            const slides = document.querySelectorAll(".slide");
            const interval = 5000;

            function slideShow(i) {
                slides.forEach(slide => slide.classList.remove("active"));
                slides[i].classList.add("active");
            }
            
            function nextSlide() {
                slideIndex++;
                if (slideIndex >= slides.length) slideIndex = 0;
                slideShow(slideIndex);
            }

            setInterval(nextSlide,interval);

            //smooth slider
            const galleryTrack = document.querySelector(".gallery-track");
            const galleryPics = document.querySelectorAll(".pic");
            const second = 3000;

            let picIndex = 0;

            function nextPic() {
                picIndex++;
                if (picIndex >= galleryPics.length) picIndex = 0;

                galleryTrack.style.transform = `translateX(-${picIndex * 100}%)`;
            }

            setInterval(nextPic, second);