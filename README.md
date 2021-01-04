# Friso's Component API

**Archived because I switched from this hobby prototype to TailwindCSS and Vue**

<section>
    <h2>Installing Friso's Component API</h2>
    <p>Run <code>composer install</code></p>
    <p>Upload the code to a PHP server and that's it.</p>
    <h3>Configuration</h3>
    <p>On line 2 of index.php you can change the origin domains that can access the API. The default is any domain.</p>
    <p><pre><code>header("Access-Control-Allow-Origin: *");</code></pre></p>
    <p>You may want to limit access on a private API if the URL is exposed through a front-end implementation.</p>
    <p>Alternatively you can extend it with API keys or some other access control system.</p>
</section>
<section>
    <h2>Using the Component API</h2>
    <p>Compiled stylesheets and javascript live in the static folder. Add your own styling or variables to the build by changing these.</p>
    <p>For a full breakdown of the design, visit <a href="{{site.url}}/general/architecture/" class="tag tag-info no-underline">Architecture</a></p>
    <p>In short:</p>
    <ul>
        <li>Add new components to the corresponding component folder: particles, atoms or molecules.</li>
        <li>Organisms and templates live in specific projects, but you can extend the API if so desired.</li>
        <li>Add only components that will be reused and need to be maintained.</li>
        <li>Components are Mustache templates, javascript or CSS.</li>
        <li>Added CSS components must be added to the folder's build SASS file.</li>
        <li>Added Mustache components must be added to the allowed API calls in index.php<br/>(<code>static $components</code>)</li>
        <li>Javascript components need to be added to the relevant libraries in the static folder.</li>
    </ul>
    <h3>Front-end implementation</h3>
    <p>Load the compiled stylesheet and javascript of your choice from the static folder of your API.</p>
    <p>Create your first component:</p>
<pre><code>&lt;div id=&quot;hello-world&quot;&gt;&lt;/div&gt;
&lt;script&gt;
    parseComponentHTML(&quot;#hello-world&quot;, {
        &quot;name&quot;: &quot;alert&quot;,
        &quot;vars&quot;: {
            &quot;type&quot;: &quot;info&quot;,
            &quot;message&quot;: &quot;Hello world!&quot;
        }
    })
&lt;/script&gt;
</code></pre>
<p>Read the docs.</p>
</section>

<section>
    <h2>Style guide documentation</h2>
    <p>You are free to implement a documentation website however you wish.</p>
    <p>If you want to get started with the current website as a template, you can find it on
        <a href="https://github.com/FrisovanDijk/friso-components-doc" target="_blank">Github</a>.</p>
    <p>This documentation is built with <a href="https://sculpin.io" target="_blank">Sculpin</a> as a static site generator.
        Run <code>composer install</code> if you want to use Sculpin. The files are in source.</p>
    <p>Alternatively you can find the generated static site in output_prod.</p>
</section>
