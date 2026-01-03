# Pipeline Parser API 🔧

A small FastAPI service that parses a pipeline represented by nodes and edges and determines whether the graph is a directed acyclic graph (DAG).

---

## 🔎 Overview

- **GET /** — health endpoint that responds with `{ "Ping": "Pong" }`.
- **POST /pipelines/parse** — accepts a JSON payload with `nodes` and `edges`, returns the number of nodes, number of edges, and whether the graph is a DAG.

The DAG check uses a DFS-based cycle detection: nodes must have unique `id` fields and edges reference those ids.

---

## ⚙️ Requirements

- Python 3.10+
- fastapi
- uvicorn

Install dependencies:

```bash
python -m venv .venv
source .venv/bin/activate
pip install fastapi uvicorn
```

> Tip: You can create a `requirements.txt` later with `pip freeze > requirements.txt`.

---

## ▶️ Run the app

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Open the interactive API docs at: http://localhost:8000/docs

---

## 📫 POST /pipelines/parse — Usage

Request body schema:

```json
{
  "nodes": [ { "id": "A" }, { "id": "B" } ],
  "edges": [ { "source": "A", "target": "B" } ]
}
```

Curl example:

```bash
curl -X POST http://localhost:8000/pipelines/parse \
  -H "Content-Type: application/json" \
  -d '{"nodes":[{"id":"A"},{"id":"B"}],"edges":[{"source":"A","target":"B"}]}'
```

Successful response:

```json
{
  "status": "success",
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}
```

Example with a cycle (is_dag: false):

Request:

```json
{
  "nodes": [{"id":"A"},{"id":"B"}],
  "edges": [{"source":"A","target":"B"},{"source":"B","target":"A"}]
}
```

Response:

```json
{ "status": "success", "num_nodes": 2, "num_edges": 2, "is_dag": false }
```

---

## 📝 Notes & Troubleshooting

- The server's CORS is configured to allow `http://localhost:3000` by default.
- Ensure `edges` reference existing node `id` values to avoid KeyError-like behavior.
- Use the interactive docs (`/docs`) to try requests and view schemas.

---
