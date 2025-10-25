//token siempre empieza con Bearer
function normalizeToken(raw) {
  if (!raw) return "";
  return raw.startsWith("Bearer ") ? raw : `Bearer ${raw}`;
}

//Quita espacios, mayusculas y acentos
function norm(s) {
  return (s || "")
    .normalize("NFD")                    
    .toLowerCase()                        
    .replace(/\s+/g, "")                  
    .trim();
}

//llamada a api (asincrona)
async function apiFetch(url, token) {
  const res = await fetch(url, {
    headers: { Authorization: token, Accept: "application/json" },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} • ${res.statusText}\n${text}`);
  }
  return res.json();
}

//Recomendacion de claude (como no se cuantos artistas habran no conviene definir estructura desde html)
function artistCard(a) {
  const img = a.images?.[0]?.url || "";
  const genres = (a.genres || []).slice(0, 3).join(", ") || "—";
  const followers = a.followers?.total?.toLocaleString?.() ?? "—";
  const popularity = a.popularity ?? "—";
  const external = a.external_urls?.spotify || "#";

  const wrap = document.createElement("div");
  wrap.className = "col-12";
  wrap.innerHTML = `
    <div class="card h-100 shadow-sm">
      <div class="row g-0">
        <div class="col-sm-4">
          <img src="${img}" class="img-fluid rounded-start" alt="${a.name}"
               onerror="this.src=''; this.classList.add('d-none');">
        </div>
        <div class="col-sm-8">
          <div class="card-body">
            <h5 class="card-title">${a.name}</h5>
            <p class="card-text mb-1"><strong>Géneros:</strong> ${genres}</p>
            <p class="card-text mb-1"><strong>Followers:</strong> ${followers}</p>
            <p class="card-text"><small class="text-muted">Popularity: ${popularity}</small></p>
            <a class="btn btn-success btn-sm" href="${external}" target="_blank" rel="noopener">Abrir en Spotify</a>
            <div class="form-text mt-2"><code>ID: ${a.id}</code></div>
          </div>
        </div>
      </div>
    </div>
  `;
  return wrap;
}

//Datos (asincrona)
async function searchArtistsByName(q, token) {
  const url = `https://api.spotify.com/v1/search?type=artist&limit=50&q=${encodeURIComponent(q)}`;
  const data = await apiFetch(url, token);
  return data.artists?.items ?? [];
}

//Logica (asincrona)
async function handleSearch() {
  const token = normalizeToken(document.querySelector("#token").value.trim());
  const qInput = document.querySelector("#search").value.trim();
  const results = document.querySelector("#results");

  results.innerHTML = `<div class="col-12"><div class="alert alert-secondary">Buscando…</div></div>`;

  try {
    if (!token) throw new Error("Falta el Access Token.");
    if (!qInput) throw new Error("Escribe el nombre exacto del artista.");

    const target = norm(qInput);

    // Busca por nombre
    const items = await searchArtistsByName(qInput, token);
    const exactMatches = items.filter((a) => norm(a.name) === target);

    if (exactMatches.length === 0) {
      throw new Error(`No se encontró artista "${qInput}".`);
    }

    //borrar cont "buscando" si se encuentra artista
    results.innerHTML = "";

    // Si hay dos (o más) con el mismo nombre te los muestra 
    exactMatches.forEach((artist) => {
      const card = artistCard(artist);
      document.querySelector("#results").appendChild(card);
    });

  //error
  } catch (err) {
    results.innerHTML = `<div class="col-12"><div class="alert alert-danger">${err.message}</div></div>`;
  }
}

// Eventos 
function attachEvents() {
  document.getElementById("btn-search").addEventListener("click", handleSearch);
  document.getElementById("search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });
}

document.addEventListener("DOMContentLoaded", attachEvents);


