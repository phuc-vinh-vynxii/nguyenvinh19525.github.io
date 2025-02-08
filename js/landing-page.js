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
// animation scroll and load
// kiểm tra phần tử trong viewportviewport
function isInViewport(element)
{
    const rect = element.getBoundingClientRect();
    return (
        rect.top + rect.height / 2 <= window.innerHeight &&
        rect.bottom - rect.height / 2 >= 0
    );
}
// xử lý scroll hoặc load
const ScrollLoad = (element, animation, state) =>
{
    if (isInViewport(element) && !state.hasAnimation)
    {
        element.classList.add(animation);
        state.hasAnimation = true;
    }
}
const handleScrollLoad = (parent, child, animation, state) =>
{
    if (isInViewport(parent) && !state.hasAnimation)
    {
        child.classList.add(animation);
        state.hasAnimation = true;
    }
}
const featuresScrollLoad = (element, features, animation, state) =>
{
    if (isInViewport(element) && !state.hasAnimation)
    {
        features.forEach((item, index) =>
        {
            setTimeout(()=>
            {
                item.classList.add(animation);
            }, index*400)
        })
        state.hasAnimation = true; // đánh dấu thực hiện animation
    }
}
const priceScrollLoad = (element, priceTypes, animation, state) =>
{
    if (isInViewport(element) && !state.hasAnimation)
    {
        priceTypes.forEach((index, item) =>
        {
            setTimeout(() =>
            {
                item.classList.add(animation);
            }, index*400)
        })
        state.hasAnimation = true;
    }
}
const discoverState = {hasAnimation: false};
const portfolioState = {hasAnimation: false};
const featuresState = {hasAnimation: false};
const pricingState = {hasAnimation: false};
const contactState = {hasAnimation: false};

// querySelector
const discoverImg = document.querySelector('.discover-image');
const portfolioBox = document.querySelector('.portfolio-animation');
const featureSection = document.querySelector('.feature-section');
const featureItems = featureSection.querySelectorAll('.col-features');
const features = [...featureItems];
const priceSection = document.querySelector('.price-section');
const priceBoxes = priceSection.querySelectorAll('.price-box');
const priceArray = [...priceBoxes];
const contactSection = document.querySelector('.contact-section');
const contactBox = contactSection.querySelector('.contact-box');
window.addEventListener("scroll", () =>
{
    ScrollLoad(discoverImg, "slideInLeft", discoverState);
    ScrollLoad(portfolioBox, "fadeIn", portfolioState);
    featuresScrollLoad(featureSection, features, "fadeIn", featuresState);
    featuresScrollLoad(priceSection, priceArray, "bounceIn", pricingState);
    handleScrollLoad(contactSection, contactBox, "bounceIn", contactState);
})

