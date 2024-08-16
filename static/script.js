// Function to fetch content and populate code block
function fetchAndPopulateCode(url, codeElementId, language) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const codeElement = document.getElementById(codeElementId);
            codeElement.textContent = data;
            hljs.highlightElement(codeElement);
        })
        .catch(error => console.error(`Error fetching ${url}:`, error));
}

// Function to fetch content and populate textarea
function fetchAndPopulateTextarea(url, textareaId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(textareaId).value = data;
        })
        .catch(error => console.error(`Error fetching ${url}:`, error));
}

// Function to fetch content and render markdown
function fetchAndRenderMarkdown(url, previewId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(previewId).innerHTML = marked.parse(data);
        })
        .catch(error => console.error(`Error fetching ${url}:`, error));
}

// Fetch and populate all elements
document.addEventListener('DOMContentLoaded', function() {
    fetchAndPopulateCode('/static/COBOLcode.md', 'cobolProcedureCode', 'cobol');
    fetchAndRenderMarkdown('/static/COBOLdocs.md', 'cobolDocsPreview');
    fetchAndRenderMarkdown('/static/PythonUserStory.md', 'userStoryPreview');
    fetchAndPopulateCode('/static/PythonCode.md', 'pythonFunctionCode', 'python');
    // Initialize Highlight.js
    hljs.highlightAll();
});