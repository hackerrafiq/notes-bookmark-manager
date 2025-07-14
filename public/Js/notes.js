const form = document.getElementById('noteForm');
const notesList = document.getElementById('notesList');
const apiUrl = 'http://localhost:5000/api/notes';

// Add new note
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  const tags = document.getElementById('tags').value.trim().split(',').map(tag => tag.trim()).filter(tag => tag);

  if (!title || !content) {
    return alert("Title and content are required!");
  }

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, tags }),
  });

  if (res.ok) {
    form.reset();
    loadNotes();
  } else {
    alert("Failed to add note.");
  }
});

// Delete note
async function deleteNote(id) {
  const confirmDelete = confirm("Are you sure you want to delete this note?");
  if (!confirmDelete) return;

  const res = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    loadNotes();
  } else {
    alert("Failed to delete note.");
  }
}

// Load notes with optional search + tag filter
async function loadNotes() {
  const search = document.getElementById('searchInput')?.value.trim();
  const tags = document.getElementById('filterTags')?.value.trim();

  let url = apiUrl;

  const params = [];
  if (search) params.push(`q=${encodeURIComponent(search)}`);
  if (tags) params.push(`tags=${encodeURIComponent(tags)}`);
  if (params.length > 0) url += '?' + params.join('&');

  const res = await fetch(url);
  const notes = await res.json();

  notesList.innerHTML = '';
  notes.forEach(note => {
    const div = document.createElement('div');
    div.className = 'bg-white shadow rounded p-4 relative';

    div.innerHTML = `
      <h3 class="text-lg font-semibold">${note.title}</h3>
      <p class="text-sm">${note.content}</p>
      <p class="text-xs text-gray-500 mt-2">Tags: ${note.tags.join(', ') || 'None'}</p>
      <button onclick="deleteNote('${note._id}')" class="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm">🗑️</button>
    `;
    notesList.appendChild(div);
  });
}

// Handle search button click
document.getElementById('searchBtn').addEventListener('click', loadNotes);

// Load notes when page loads
loadNotes();
