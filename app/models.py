from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from .Database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, nullable=False)
    email = Column(String, nullable=False, unique=True)
    full_name = Column(String,nullable=True)
    password = Column(String, nullable=False)
    role = Column(String,nullable=True)