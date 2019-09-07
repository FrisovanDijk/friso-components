var apiUrl = "https://component.frisovandijk.com/api/";

const baseUrl = apiUrl + "docs/";

// Makes the server API call
function getComponent(name, data) {
    const host = apiUrl;
    const url = "index.php";
    const url_vars = btoa(JSON.stringify(data));
    const request_url = `${host}${url}?name=${name}&vars=${url_vars}`;

    // Debug mode
    console.log(request_url);

    return fetch(request_url)
    .then(function(response) {
        return response.text();
    })
    .then(function(html) {
        return html;
    }).catch(function(error) {
        console.warn(error);
    })
}

// Makes the API call and parses the HTML without further processing
function parseComponentHTML(id, data) {
    // Grab the component
    getComponent(data['name'], data['vars']).then(function(html) {
        // When the Promise is fulfilled inject the HTML in the DOM
        document.querySelector(id).innerHTML = html;
    })
}

// Parse component as HTML child with provided child_id
function parseComponentHTMLChild(container_id, child_id, data) {
    var child = document.createElement("div");
    child.setAttribute("id", child_id);
    document.querySelector(container_id).appendChild(child);

    // Grab the component
    getComponent(data['name'], data['vars']).then(function(html) {
        // When the Promise is fulfilled inject the HTML in the DOM
        document.getElementById(child_id).innerHTML = html;
    })
}

// PARTICLES

// MODAL
function simple_pop(container_id, data) {
    var child_id = Date.now();
    parseComponentHTMLChild(container_id, child_id, data);

    var pop = document.getElementById(child_id);

    pop.style.display = "block";
    pop.addEventListener("click", function(){
        pop.style.display = "none"
    });
}