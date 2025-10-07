from fastapi import FastAPI
from . import models
from .Database import engine
import psycopg2
from  .routers import users

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

app.include_router(users.router)