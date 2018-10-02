var app = new Vue({
    el: '#app',
    data: {
        table_items : [
            {
                type: 'beacon',
                description: 'Requests sent through the Beacon API'
            },
            {
                type: 'csp_report',
                description: 'Requests sent to the report-uri given in the Content-Security-Policy header, when an attempt to violate the policy is detected'
            },
            {
                type: 'font',
                description: 'Web fonts loaded for a @font-face CSS rule'
            },
            {
                type: 'font',
                description: 'Images loaded by a <span class="text-info">&lt;picture&gt;</span> element or given in an <span class="text-info">&lt;img&gt;</span> element\'s srcset attribute'
            },
            {
                type: 'mainframe',
                description: 'Top-level documents loaded into a tab'
            },
            {
                type: 'media',
                description: 'Resources loaded by a <span class="text-info">&lt;video&gt;</span> or <span class="text-info">&lt;audio&gt;</span> element'
            },
            {
                type: 'object',
                description: 'Resources loaded by an <span class="text-info">&lt;object&gt;</span> or <span class="text-info">&lt;embed&gt;</span> element'
            },
            {
                type: 'object_subrequest',
                description: 'Requests sent by plugins'
            },
            {
                type: 'ping',
                description: 'Requests sent to the URL given in a hyperlink\'s ping attribute, when the hypelink is followed'
            },
            {
                type: 'script',
                description: 'Code that is loaded to be executed by a <span class="text-info">&lt;script&gt;</span> element or running in a Worker'
            },
            {
                type: 'speculative',
                description: 'A TCP/TLS handshake made by the browser when it determines it will need the connection open soon.'
            },
            {
                type: 'stylesheet',
                description: 'CSS stylesheets loaded to describe the representation of a document'
            },
            {
                type: 'subframe',
                description: 'Documents loaded into an <span class="text-info">&lt;iframe&gt;</span> or <span class="text-info">&lt;frame&gt;</span> element'
            },
            {
                type: 'web_manifest',
                description: 'Web App Manifests loaded for websites that can be installed to the homescreen'
            },
            {
                type: 'websocket',
                description: 'Requests initiating a connection to a server through the WebSocket API'
            },
            {
                type: 'xbl',
                description: 'XBL bindings loaded to extend the behavior of elements in a document'
            },
            {
                type: 'xml_dtd',
                description: 'DTDs loaded for an XML document'
            },
            {
                type: 'xmlhttprequest',
                description: 'Requests sent by an XMLHttpRequest object or through the Fetch API'
            },
            {
                type: 'xslt',
                description: 'XSLT stylesheets loaded for transforming an XML document'
            },
            {
                type: 'other',
                description: 'Resources that aren\'t covered by any other available type'
            },
        ]
    }
})