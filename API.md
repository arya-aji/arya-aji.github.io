# data.aryaaji.com API Documentation

This API allows external websites (such as `aryaaji.com` and `extension.aryaaji.com`) to dynamically fetch projects managed in the dashboard.

## Security Controls

To protect your data, two layers of security are enforced:
1. **CORS Restrictions**: Only requests originating from the following domains are allowed:
   - `https://aryaaji.com`
   - `https://extension.aryaaji.com`
   - `http://localhost:5173` (Local Development)
   - `http://localhost:5174` (Local Development)
2. **API Key Authentication**: You must provide your secret `API_KEY` with every request.

---

## Endpoint

```
GET https://data.aryaaji.com/api/projects
```

---

## Authentication Methods

You can authenticate in one of two ways:

### A. Via Request Header (Recommended)
Pass your API key in the custom header `x-api-key`:
```javascript
headers: {
  "x-api-key": "your-secret-api-key"
}
```

### B. Via Query Parameter
Append the key as `api_key` to your URL query string:
`https://data.aryaaji.com/api/projects?api_key=your-secret-api-key`

---

## Query Parameters

You can customize the API response by appending the following optional query parameters to the URL:

| Parameter | Type | Allowed Values | Description |
| :--- | :--- | :--- | :--- |
| `category` | `string` | `portfolio`, `extension` | Filter projects by category. |
| `limit` | `number` | Positive integers (e.g., `5`) | Limit the number of projects returned. |
| `search` | `string` | Any search term (e.g., `map`) | Search for projects where the title contains the term (case-insensitive). |
| `orderBy` | `string` | `orderIndex`, `name` (or `title`), `release` (or `createdAt` / `date`) | Order projects by custom dashboard order, alphabetically, or by release date. |
| `order` | `string` | `asc`, `desc` | Sorting direction (ascending or descending). Defaults to `asc`. |

---

## Response Structure

The endpoint returns a JSON array of visible projects:

```json
[
  {
    "id": "e2c38d8d-bf8a-4d2b-aa90-b1cb3b320d3f",
    "slug": "minitube-pip",
    "title": "MiniTube PiP",
    "name": "minitube-pip",
    "org": "arya-aji",
    "date": "2026-06-05",
    "dateDisplay": "Jun 2026",
    "description": "A browser extension that enables YouTube and other video platforms to launch in Picture-in-Picture mode...",
    "category": "extension",
    "thumbnailUrl": "https://storage.aryaaji.com/uploads/thumbnail-1.png",
    "demoUrl": "https://extension.aryaaji.com/minitube",
    "githubUrl": "https://github.com/arya-aji/minitube-pip",
    "tags": ["javascript", "extension", "productivity"],
    "featured": true,
    "challenges": [],
    "results": [],
    "orderIndex": 0,
    "createdAt": "2026-06-07T04:00:00.000Z",
    "updatedAt": "2026-06-07T04:30:00.000Z"
  }
]
```

---

## Usage Examples

### 1. Get Newest 3 Portfolio Projects (for `aryaaji.com` using Header Auth)
Fetches only portfolio projects, sorted newest first, limited to a count of 3:

**JavaScript Fetch Code:**
```javascript
async function getLatestProjects() {
  const url = "https://data.aryaaji.com/api/projects?category=portfolio&orderBy=release&order=desc&limit=3";
  try {
    const res = await fetch(url, {
      headers: {
        "x-api-key": "e40a02c0d8d21c3b8839efcbdecd839ef42c"
      }
    });
    if (!res.ok) throw new Error("API error");
    const projects = await res.json();
    return projects;
  } catch (error) {
    console.error("Failed to load projects:", error);
    return [];
  }
}
```

### 2. Search all Extensions alphabetically by name (for `extension.aryaaji.com` using Query Auth)
Fetches only extensions matching the search query `"privacy"`, sorted alphabetically:

**JavaScript Fetch Code:**
```javascript
async function getExtensions() {
  const apiKey = "e40a02c0d8d21c3b8839efcbdecd839ef42c";
  const url = `https://data.aryaaji.com/api/projects?category=extension&search=privacy&orderBy=name&order=asc&api_key=${apiKey}`;
  const res = await fetch(url);
  return await res.json();
}
```
