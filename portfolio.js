var web_projects_list_cont = document.getElementById('web_projects_list_cont');
var mobile_projects_list_cont = document.getElementById('mobile_projects_list_cont');
var other_projects_list_cont = document.getElementById('other_projects_list_cont');

var web_projects_btn = document.getElementById('web_projects_btn');
var mobile_projects_btn = document.getElementById('mobile_projects_btn');
var other_projects_btn = document.getElementById('other_projects_btn');

function showTab(e) {
  if (e == 1) {
    web_projects_list_cont.classList.add("tab_cont_active")
    mobile_projects_list_cont.classList.remove("tab_cont_active")
    other_projects_list_cont.classList.remove("tab_cont_active")

    web_projects_btn.classList.add("tab_active")
    mobile_projects_btn.classList.remove("tab_active")
    other_projects_btn.classList.remove("tab_active") 
  }
  else if (e == 2) {
    web_projects_list_cont.classList.remove("tab_cont_active")
    mobile_projects_list_cont.classList.add("tab_cont_active")
    other_projects_list_cont.classList.remove("tab_cont_active")

    web_projects_btn.classList.remove("tab_active")
    mobile_projects_btn.classList.add("tab_active")
    other_projects_btn.classList.remove("tab_active")
  }
  else {
    web_projects_list_cont.classList.remove("tab_cont_active")
    mobile_projects_list_cont.classList.remove("tab_cont_active")
    other_projects_list_cont.classList.add("tab_cont_active")

    web_projects_btn.classList.remove("tab_active")
    mobile_projects_btn.classList.remove("tab_active")
    other_projects_btn.classList.add("tab_active")
  }
}

/*var home_section = document.getElementById("home")
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
intersectionObserver.observe(contacts_section);*/