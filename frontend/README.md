# Pipeline Builder (Frontend) ✅

A small React-based drag-and-drop pipeline builder that uses React Flow to create node-based pipelines for inputs, LLMs, data transformation, and outputs. Nodes can be dragged from the toolbar, connected visually, and submitted as a JSON payload to a backend parsing endpoint.

---

## 🚀 Features

- Visual drag-and-drop pipeline editor using `reactflow`
- Multiple node types: `Input`, `LLM`, `Output`, `Text`, `Info`, `Group`, `Data`, `Cluster`, and `Business`
- Node configuration UI for names and types
- Auto-detected dependencies for `Text` nodes (detects `{{variable}}` placeholders and exposes them as handles)
- Persisted state during runtime using `zustand`
- Simple `Submit` button that POSTs nodes & edges to a backend endpoint (`/pipelines/parse`)

---

## 🧭 Quick Start

### Requirements
- Node.js 14+ (or latest LTS)
- npm or yarn

### Install & Run

```bash
# install deps
npm install

# start development server
npm start
```

Open http://localhost:3000 in your browser.

### Build

```bash
npm run build
```

---

## 🧩 Project Structure (select files)

- `src/`
  - `App.js` — top-level component that renders the toolbar and editor UI.
  - `toolbar.js` — draggable nodes used to create nodes in the flow.
  - `ui.js` — React Flow setup, handlers for `onDrop`, `onConnect`, and rendering tools like `Background`, `Controls` & `MiniMap`.
  - `store.js` — `zustand` store that manages `nodes`, `edges`, and helpers (`getNodeID`, `addNode`, `onNodesChange`, `onEdgesChange`, `onConnect`).
  - `submit.js` — `SubmitButton` component that sends the JSON payload to `http://localhost:8000/pipelines/parse`.
  - `draggableNode.js` — draggable UI pieces in the toolbar.
  - `Components/`
    - `Basecomp.js` — common UI used for `Input`, `Output`, `Group`, `Cluster` nodes.
    - `Llmcomp.js` — LLM-like nodes with multiple input handles (system/prompt) and a response output.
    - `Textcomp.js` — textual nodes with auto-detected input placeholders and dynamic handles.
  - `nodes/` — thin wrappers that instantiate the components for each node type (`InputNode`, `LLMNode`, `OutputNode`, etc.)

- Configuration: `tailwind.config.cjs`, `postcss.config.cjs`, `index.css`

---

## 📡 How to Use

1. Drag a node from the toolbar into the workspace.
2. Click a node to open inline controls and update the **Name** and **Type**.
3. Connect node handles to define data flow. `Text` nodes will create dynamic *target* handles for `{{placeholders}}` referenced in their content.
4. Click **Submit** to POST the current graph to the backend.

Payload sample:

```json
{
  "nodes": [ /* array of nodes with id, type, position, data */ ],
  "edges": [ /* array of edges describing connections */ ]
}
```

The frontend currently POSTs to: `http://localhost:8000/pipelines/parse`.

---

## 🛠️ Developer Notes

- State management: `zustand` is used to keep nodes and edges reactive and persistent while the app is running.
- Node IDs: `getNodeID(type)` in `store.js` generates readable IDs like `customInput-1`, `llm-2`.
- Edges: new edges use `smoothstep` and an animated arrow marker.
- `Textcomp` auto-parses `{{name}}` placeholders using a regex and adds corresponding `target` handles to the node for visual linking.
- Styling: Tailwind utility imports are included via `index.css`, and additional inline styles are used for node visuals.

---

## ✅ Recommended Local Backend

For the submit functionality to work in development, run a backend at `http://localhost:8000` that accepts POST requests at `/pipelines/parse` and returns a JSON response. The frontend expects the body to be JSON.

---

## 🔧 Common Changes / Extensions

- Add persistence: serialize the `nodes` and `edges` to localStorage or to a server endpoint to save/load pipelines.
- Add validation: check for required connections (e.g., inputs feeding LLMs before submission).
- Add authentication & user management if you plan to keep pipelines per user.
- Add tests: create unit tests for the store and component behavior.

---

## 🧪 Testing

```bash
npm test
```

> React scripts' default test command will be used.

---

## 📜 License

This project is currently unlicensed (adjust `package.json` and add a LICENSE file as needed).

---

## 💡 Tips & Troubleshooting

- If the drag-and-drop doesn't work, ensure the devtools console has no errors and that `ReactFlow` is initialized (`onInit` is called).
- If `Submit` returns a network error, check that the backend is running and CORS is not blocking requests.

---

If you'd like, I can also:
- Add a `CONTRIBUTING.md` and `ISSUE_TEMPLATE`/`PR_TEMPLATE` for project collaboration ✅
- Add persistence (save/load) example using localStorage or a minimal backend ✅

Happy to extend the README with screenshots or a short demo GIF—tell me what you'd prefer. ✨
