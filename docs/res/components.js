const apiUrl = "https://www.frisovandijk.com/components/";
const baseUrl = window.window.location.origin + "/docs/";

// Makes the server API call
function getComponent(name, vars) {
    const host = apiUrl;
    const url = "index.php";
    const url_vars = btoa(JSON.stringify(vars));
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