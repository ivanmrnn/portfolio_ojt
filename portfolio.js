
var tab_content_1 = document.getElementById('content-1');
var tab_content_2 = document.getElementById('content-2');

var about_tab = document.getElementById('about_tab_btn');
var experience_tab = document.getElementById('experience_tab_btn');
function showTab(e) {

  if (e == 1) {
    tab_content_1.classList.add("tab_cont_active")
    tab_content_2.classList.remove("tab_cont_active")

    about_tab.classList.add("tab_active")
    experience_tab.classList.remove("tab_active")
  }
  else {
    tab_content_2.classList.add("tab_cont_active")
    tab_content_1.classList.remove("tab_cont_active")

    experience_tab.classList.add("tab_active")
    about_tab.classList.remove("tab_active")
  }
}

var home_section = document.getElementById("home")
var services_section = document.getElementById("services")
var skills_section = document.getElementById("skills")
var projects_section = document.getElementById("projects")
var certificates_section = document.getElementById("certificates")
var contacts_section = document.getElementById("contacts")

var home_button = document.getElementById("home_btn")
var services_button = document.getElementById("services_btn")
var skills_button = document.getElementById("skills_btn")
var projects_button = document.getElementById("projects_btn")
var certificates_button = document.getElementById("certificates_btn")
var contacts_button = document.getElementById("contacts_btn")

var section_visibility = 0.6;

var observerOptions = {
  threshold: section_visibility,
};

var intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.target === home_section) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6){
        home_button.classList.add("section_active")
        services_button.classList.remove("section_active")
        skills_button.classList.remove("section_active")
        projects_button.classList.remove("section_active")
        certificates_button.classList.remove("section_active")
        contacts_button.classList.remove("section_active")
      }
    } else if (entry.target === services_section) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        home_button.classList.remove("section_active")
        services_button.classList.add("section_active")
        skills_button.classList.remove("section_active")
        projects_button.classList.remove("section_active")
        certificates_button.classList.remove("section_active")
        contacts_button.classList.remove("section_active")
      }
    } else if (entry.target === skills_section) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        home_button.classList.remove("section_active")
        services_button.classList.remove("section_active")
        skills_button.classList.add("section_active")
        projects_button.classList.remove("section_active")
        certificates_button.classList.remove("section_active")
        contacts_button.classList.remove("section_active")
      }
    } else if (entry.target === projects_section) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        home_button.classList.remove("section_active")
        services_button.classList.remove("section_active")
        skills_button.classList.remove("section_active")
        projects_button.classList.add("section_active")
        certificates_button.classList.remove("section_active")
        contacts_button.classList.remove("section_active")
      }
    } else if(entry.target === certificates_section) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        home_button.classList.remove("section_active")
        services_button.classList.remove("section_active")
        skills_button.classList.remove("section_active")
        projects_button.classList.remove("section_active")
        certificates_button.classList.add("section_active")
        contacts_button.classList.remove("section_active")
      }
    } else (entry.target === contacts_section) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        home_button.classList.remove("section_active")
        services_button.classList.remove("section_active")
        skills_button.classList.remove("section_active")
        projects_button.classList.remove("section_active")
        certificates_button.classList.remove("section_active")
        contacts_button.classList.add("section_active")
      }
    }
  });
};
intersectionObserver.observe(home_section);
intersectionObserver.observe(services_section);
intersectionObserver.observe(skills_section);
intersectionObserver.observe(projects_section);
intersectionObserver.observe(certificates_section);
intersectionObserver.observe(contacts_section);