/* =========================================================
   HOUSE OF RAY
   Services JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    loadServices();
});


async function loadServices() {

    const featuredContainer =
        document.getElementById("featured-services");

    const servicesContainer =
        document.getElementById("services-list");

    /*
     * If neither container exists, this page
     * does not need the services data.
     */

    if (!featuredContainer && !servicesContainer) {
        return;
    }

    try {

        const response = await fetch("data/services.json");

        if (!response.ok) {
            throw new Error("Unable to load services.");
        }

        const services = await response.json();


        /*
         * HOMEPAGE
         *
         * Show the first six services as featured services.
         */

        if (featuredContainer) {

            const featuredServices =
                services.slice(0, 6);

            featuredContainer.innerHTML =
                featuredServices
                    .map(service => createServiceCard(service))
                    .join("");
        }


        /*
         * SERVICES PAGE
         *
         * Show every service.
         */

        if (servicesContainer) {

            servicesContainer.innerHTML =
                services
                    .map(service => createServiceCard(service))
                    .join("");
        }


    } catch (error) {

        console.error(
            "House of Ray services error:",
            error
        );

        if (featuredContainer) {

            featuredContainer.innerHTML = `
                <p class="service-error">
                    Services could not be loaded.
                </p>
            `;
        }

        if (servicesContainer) {

            servicesContainer.innerHTML = `
                <p class="service-error">
                    Services could not be loaded.
                </p>
            `;
        }
    }
}


/*
 * CREATE SERVICE CARD
 */

function createServiceCard(service) {

    return `
        <article class="service-card">

            <a
                href="service.html?id=${service.id}"
                class="service-card-image"
            >

                <img
                    src="${service.image}"
                    alt="${service.title}"
                    loading="lazy"
                >

            </a>

            <div class="service-card-content">

                <p class="service-card-category">
                    ${service.category}
                </p>

                <h3>
                    <a href="service.html?id=${service.id}">
                        ${service.title}
                    </a>
                </h3>

                <p>
                    ${service.shortDescription}
                </p>

                <a
                    href="service.html?id=${service.id}"
                    class="text-link"
                >
                    Explore treatment →
                </a>

            </div>

        </article>
    `;
}