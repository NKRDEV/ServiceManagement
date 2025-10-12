#from passlib.context import CryptContext
#pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
from fastapi import Depends
import hashlib
import os
from dotenv import load_dotenv
from datetime import datetime,timedelta
from jose import JWTError,jwt
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='login')

def hash_password(password: str) -> str:
    # Encode the password to bytes, then hash it
    hashed = hashlib.sha256(password.encode('utf-8')).hexdigest()
    return hashed

def verify(plain_password:str, hashed_password: str) -> bool:
    return hash_password(plain_password) == hashed_password

#token generation

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM =os.getenv("ALGORITHM")
ACCESS_TOKEN_EXP_MIN = int(os.getenv("ACCESS_TOKEN_EXP_MIN"))

def access_token(data: dict):
    for_encoding = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXP_MIN)
    for_encoding.update({"exp":expire})
    encoded_data = jwt.encode(for_encoding,SECRET_KEY,algorithm=ALGORITHM)
    return encoded_data

def token_validation(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError as e:
        print(" Invalid or expired token:", e)
        return None