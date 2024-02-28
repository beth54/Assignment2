import uvicorn
from fastapi import *
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

@app.get("/")
async def view_index():
    return FileResponse("./frontend/index.html")

app.mount("/", StaticFiles(directory="frontend"), name = "static")