// script.js
document.addEventListener("DOMContentLoaded", function () {
    // 主项目点击事件
    const featuredProject = document.getElementById("featuredProject");
    if (featuredProject) {
        featuredProject.addEventListener("click", function () {
            showProjectDetails('项目123');
        });
    }

    // 项目1、2、3点击事件
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            window.location.href = `project${index + 1}.html`;
        });
    });
});