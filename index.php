<?php
header("Access-Control-Allow-Origin: *");

static $components = [
    [ // ATOMS

    ],
    [ // MOLECULES
        "alert",
        "breadcrumbs",
        "card-fixed",
        "card-list",
        "tag-list"
    ],
    [ // ORGANISMS

    ],
    [ // TEMPLATES Docs
        "docs-header",
        "docs-footer"
    ]
];

static $atoms = [

];

static $molecules = [
    "alert",
    "card-fixed",
    "card-list",
    "tag-list"
];

static $organisms = [

];

static $templates_docs = [
    "docs-header",
    "docs-footer"
];

require __DIR__ . '/vendor/autoload.php';

// Autoload Mustache and templates
Mustache_Autoloader::register();
$mustache = new Mustache_Engine(array(
    'loader' => new Mustache_Loader_CascadingLoader(array(
        'atoms' => new Mustache_Loader_FilesystemLoader(dirname(__FILE__) . '/source/atoms'),
        'molecules' => new Mustache_Loader_FilesystemLoader(dirname(__FILE__) . '/source/molecules'),
        'organisms' => new Mustache_Loader_FilesystemLoader(dirname(__FILE__) . '/source/organisms'),
        'docs' => new Mustache_Loader_FilesystemLoader(dirname(__FILE__) . '/source/templates/docs')
    ))
));;

$component_name = $component_vars = "";

if(isset($_GET["name"]) && isset($_GET["vars"])) {
    $component_name = htmlspecialchars($_GET["name"]);
    $component_vars = base64_decode($_GET["vars"]);

    if(isJson($component_vars)) {
        $component_vars = json_decode($component_vars);
    } else {
        $component_name = "";
    }
}

// Super fancy returning of result
echo get_component($mustache, $component_name, $component_vars);

// Functions
function get_component($mustache, $component_name, $component_vars) {
    $errorHTML = "<div class='alert alert--error'>Component could not be generated.<br/>Please verify your request.</div>";

    return (isValidComponent($component_name) ? $mustache->render($component_name, $component_vars, true) : $errorHTML);
}

function isJson($string) {
    json_decode($string);
    return (json_last_error() == JSON_ERROR_NONE);
}

function isValidComponent($component_name) {
    global $components;

    return in_multiarray($component_name, $components);
}

function in_multiarray($elem, $array)
{
    $top = sizeof($array) - 1;
    $bottom = 0;
    while($bottom <= $top)
    {
        if($array[$bottom] == $elem)
            return true;
        else
            if(is_array($array[$bottom]))
                if(in_multiarray($elem, ($array[$bottom])))
                    return true;

        $bottom++;
    }
    return false;
}