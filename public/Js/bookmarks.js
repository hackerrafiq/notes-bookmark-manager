const form = document.getElementById('bookmarkForm');
const bookmarksList = document.getElementById('bookmarksList');
const apiUrl = 'http://localhost:5000/api/bookmarks';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const url = document.getElementById('url').value.trim();
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const tags = document.getElementById('tags').value.trim().split(',').map(tag => tag.trim()).filter(tag => tag);

  if (!url) return alert("URL is required!");

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, title, description, tags }),
  });

  if (res.ok) {
    form.reset();
    loadBookmarks();
  } else {
    alert("Failed to add bookmark.");
  }
});

async function deleteBookmark(id) {
  const confirmDelete = confirm("Delete this bookmark?");
  if (!confirmDelete) return;

  const res = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  if (res.ok) {
    loadBookmarks();
  } else {
    alert("Failed to delete.");
  }
}

async function loadBookmarks() {
  const search = document.getElementById('searchInput')?.value.trim();
  const tags = document.getElementById('filterTags')?.value.trim();

  let url = apiUrl;
  const params = [];

  if (search) params.push(`q=${encodeURIComponent(search)}`);
  if (tags) params.push(`tags=${encodeURIComponent(tags)}`);
  if (params.length > 0) url += '?' + params.join('&');

  const res = await fetch(url);
  const bookmarks = await res.json();

  bookmarksList.innerHTML = '';
  bookmarks.forEach(b => {
    const div = document.createElement('div');
    div.className = 'bg-white shadow rounded p-4 relative';

    div.innerHTML = `
      <a href="${b.url}" target="_blank" class="text-blue-600 font-semibold underline">${b.title || b.url}</a>
      <p class="text-sm">${b.description || ''}</p>
      <p class="text-xs text-gray-500 mt-2">Tags: ${b.tags.join(', ') || 'None'}</p>
      <button onclick="deleteBookmark('${b._id}')" class="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm">🗑️</button>
    `;
    bookmarksList.appendChild(div);
  });
}

document.getElementById('searchBtn').addEventListener('click', loadBookmarks);
loadBookmarks();
