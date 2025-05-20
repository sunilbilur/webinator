from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from app.models import Element
from app.generator import render_element
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory="backend/templates")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate-html", response_class=HTMLResponse)
async def generate_html(request: Request, root: Element):
    content = render_element(root)
    return templates.TemplateResponse("base.html", {"request": request, "content": content})

