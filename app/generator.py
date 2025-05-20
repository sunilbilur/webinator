from jinja2 import Template
from app.models import Element

def render_element(element: Element) -> str:
    style = '; '.join(f"{k}: {v}" for k, v in (element.styles or {}).items())
    children_html = ''.join([render_element(child) for child in (element.children or [])])

    if element.type == 'img':
        return f'<img src="{element.src}" style="{style}" />'
    elif element.type in ['div', 'section', 'header', 'footer']:
        return f'<{element.type} style="{style}">{children_html}</{element.type}>'
    else:  # h1, p, span, etc.
        return f'<{element.type} style="{style}">{element.text or ""}</{element.type}>'

