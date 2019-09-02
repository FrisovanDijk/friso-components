var counter = 0;

function buildDocRowHTML(parent_id, data, title = "", opts) {
    generateDocRow(parent_id, title, opts);
    getDocRowAPI(data);
}

function generateDocRow(parent_id, title = "", opts) {
    var template = document.querySelector('#docs-row');
    var row = document.querySelector(parent_id);
    var clone = document.importNode(template.content, true);

    if(opts) {
        if(opts.text) {
            var p = document.createElement("p");
            p.textContent = opts.text;
            clone.querySelector(".f-card--rich").appendChild(p);
        }

        if(opts.width) {
            var width2 = 100 - opts.width;
            clone.querySelector(".docs-row--1").classList.replace("w-40-m", `w-${opts.width}-l`);
            clone.querySelector(".docs-row--2").classList.replace("w-60-m", `w-${width2}-l`);
            clone.querySelector(".docs-row--1").classList.remove("w-30-l");
            clone.querySelector(".docs-row--2").classList.remove("w-70-l");
        }
    }

    clone.querySelector(".docs-row--1").setAttribute("id", `demo${counter}`);
    clone.querySelector("code").setAttribute("id", `code${counter}`);
    clone.querySelector("h2").textContent = title;
    row.appendChild(clone);
}

function getDocRowAPI(data) {
    parseComponentHTML(`#demo${counter}`, data);
    document.querySelector(`#code${counter}`).innerHTML = JSON.stringify(data, null, " ");
    counter++;
}