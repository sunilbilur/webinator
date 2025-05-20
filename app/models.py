from pydantic import BaseModel
from typing import List, Optional, Dict

class Element(BaseModel):
    type: str
    text: Optional[str] = None
    src: Optional[str] = None
    styles: Optional[Dict[str, str]] = {}
    children: Optional[List["Element"]] = []

Element.update_forward_refs()
