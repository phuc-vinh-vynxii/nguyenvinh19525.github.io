/* task section */
const taskSection = document.querySelector(".task-section");
const taskPic = taskSection.querySelector(".task-pic");
const taskImage = taskPic.querySelector("img");

if (taskSection){
    const taskItem = taskSection.querySelectorAll(".task-item");
    if (taskItem){
        taskItem.forEach(button => button.addEventListener(
            "click", 
            () => 
            {
                if (button.classList.contains("task-1"))
                {
                    if (taskImage)
                    {
                        taskImage.src = "./image/pic3.jpg";
                    }
                    taskItem.forEach(
                        item =>
                            {
                                if (item.classList.contains("active"))
                                {
                                    item.classList.remove("active");
                                } 
                            }
                        )
                    button.classList.add("active");
                }
                if (button.classList.contains("task-2"))
                {
                    if (taskImage)
                    {
                        taskImage.src = "./image/pic4.jpg";
                    }
                    taskItem.forEach(
                        item =>
                            {
                                if (item.classList.contains("active"))
                                {
                                    item.classList.remove("active");
                                } 
                            }
                        )
                    button.classList.add("active");
                }
                if (button.classList.contains("task-3"))
                {
                    if (taskImage)
                    {
                        taskImage.src = "./image/pic5.jpg";
                    }
                    taskItem.forEach(
                        item =>
                            {
                                if (item.classList.contains("active"))
                                {
                                    item.classList.remove("active");
                                } 
                            }
                        )
                    button.classList.add("active");
                }
            })
        )
    }
}

/*evaluate section */
document.addEventListener("DOMContentLoaded", function () {
    const evaluateItems = document.querySelectorAll(".evaluate-item");

    evaluateItems.forEach(item => {
        const content = item.querySelector(".evaluate-content");

        item.addEventListener("click", function () {
            const isActive = content.classList.contains("active");

            evaluateItems.forEach(i => {
                const otherContent = i.querySelector(".evaluate-content");
                if (otherContent !== content) {
                    otherContent.classList.remove("active");
                }
            });

            if (!isActive) {
                content.classList.toggle("active")
            }
        });
    });
});

/*navbar -responsive*/
const navbar = document.querySelector(".navbar");
const navbarButton = navbar.querySelector(".navbar-button");
const navbarResponsive = document.querySelector(".navbar-responsive");
if (navbarButton)
{
    navbarButton.addEventListener("click", () =>
    {
        if (navbarResponsive)
            {
            navbarResponsive.classList.toggle("active");
        }   
    })
}

