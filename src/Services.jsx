
import Service from "./Service";

function Services() {

    const service1 = "Cybersecurity Analysis";
    const service2 = "Website Construction";
    const service3 = "Website Maintenance";

    return(
        <ul className="service-list">
            <li><a href=""><Service img="./src/assets/cybersecurity_analysis.jpeg" title="Cybersecurity Analysis" text="We can provide extensive Cybersecurity Analysis on all your interfaces and make sure that your company is secure."></Service></a></li>
            <li><a href=""><Service img="./src/assets/website_construction.png" title="Website Construction" text="Building a website that helps you grow and structure your company well is something that we take very seriously, using only the best and newest technologies."></Service></a></li>
            <li><a href=""><Service img="./src/assets/website_maintenance.jpeg" title="Website Meintenance" text="After building you an intuitive, well structured and most importantly, secure, website, we can also handle any maintenance or problems that may come your way."></Service></a></li>
        </ul>
    );
}

export default Services