let links = [];
let embeddings = [];

// Fetch JSON files on page load
window.addEventListener('load', async () => {
    const linksResponse = await fetch('/db/links.json');
    links = await linksResponse.json();

    const embeddingsResponse = await fetch('/db/embeddings.json');
    embeddings = await embeddingsResponse.json();

    // Decode base64 embeddings
    embeddings.forEach(embedding => {
        embedding.embedding = decodeBase64(embedding.embedding.encoded);
    });
});

document.getElementById('searchButton').addEventListener('click', triggerSearch);
document.getElementById('search').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        triggerSearch(event);
    }
});

async function triggerSearch(event) {
    const query = document.getElementById('search').value;

    // Get the embedding of the search query
    const queryEmbedding = await getQueryEmbedding(query);

    // Calculate cosine similarity
    const results = embeddings.map(embedding => {
        return {
            id: embedding.id,
            similarity: cosineSimilarity(queryEmbedding, embedding.embedding)
        };
    });

    // Sort results by similarity
    results.sort((a, b) => b.similarity - a.similarity);

    displayResults(results.slice(0, 50), links);
}

async function getQueryEmbedding(query) {
    let apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey || !apiKey.startsWith('sk-')) {
        apiKey = prompt('Please enter an OpenAI API key - it will only be stored in your browsers local storage and used for embedding the queries:');
        if (apiKey) localStorage.setItem('openai_api_key', apiKey);
        else return;
    }

    const response = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            input: query,
            model: 'text-embedding-3-large',
            encoding_format: 'base64'
        })
    });

    const data = await response.json();
    return decodeBase64(data.data[0].embedding);
}

function decodeBase64(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    const floats = new Float32Array(bytes.buffer);
    return Array.from(floats);
}

function cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((sum, a, idx) => sum + a * vecB[idx], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
}

function displayResults(results, links) {
    const linksContainer = document.getElementById('links');
    linksContainer.innerHTML = '';

    results.forEach(result => {
        const link = links.find(link => link.filepath === result.id);

        const linkUrl = link.filepath.replace('.md', '.html');

        const linkElement = document.createElement('div');
        linkElement.innerHTML = `
            <h2><a href="/${linkUrl}">${link.text.split('\n')[0]}</a> <a href="${link.url}">[↗]</a></h2>
            <p>${link.category.map(cat => `<a href="#">#${cat}</a>`).join(', ')}</p>
            <details>
                <summary>${link.text.split('\n')[2]}</summary>
                <p>${link.text.split('\n').slice(3).join('<br>')}</p>
            </details>
        `;
        linksContainer.appendChild(linkElement);
    });
}
