from fastapi import FastAPI, Form, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],
)



def is_dag(nodes,edges):
    graph={node["id"]:[] for node in nodes}

    for edge in edges:
        graph[edge["source"]].append(edge["target"])

    visited=set()
    another=set()


    def dfs(node):
        visited.add(node)
        another.add(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in another:
                return True
            
        another.remove(node)
        return False
    
    for node in graph:
        if dfs(node):
            return False
        
    return True





class pipeline(BaseModel):
    nodes:Any
    edges:Any





    

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(data:pipeline):
    Dag=is_dag(data.nodes,data.edges)
    return {'status': 'success',"num_nodes":len(data.nodes),"num_edges":len(data.edges),"is_dag":Dag}
