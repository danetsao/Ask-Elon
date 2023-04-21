from fastapi import FastAPI, HTTPException, Response
from fastapi.responses import JSONResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from askelon import generate_tweets, random_subject, random_username

app = FastAPI()
MAX_INPUT_LENGTH = 20

origins = [
    "http://localhost",
    "http://localhost:8000"
    "http://localhost:8080",
    
]

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def welcome_message():
    return {"message": "Welcome to the Ask Elon API! Go to '/docs' to see FastAPI doc page"}

@app.get("/generate_tweet/")
def generate_tweet_api(subject: str, username: str):
    generated_tweet, raw_tweet_list = generate_tweets(subject, username)
    return {"generated_tweet": generated_tweet,  "subject": subject, "username": username, "tweets": raw_tweet_list}

#Generate tweet from given username for a random subject
@app.get("/generate_tweet_random_subject")
def generate_tweet_random_subject_api(username: str):
    subject = random_subject()
    generated_tweet, raw_tweet_list = generate_tweets(subject, username)
    return {"generated_tweet": generated_tweet,  "subject": subject, "username": username, "tweets": raw_tweet_list}

@app.get("/generate_tweet_random")
def generate_tweet_random_everything_api() -> dict:
    subject = random_subject()
    username = random_username()
    generated_tweet, raw_tweet_list = generate_tweets(subject, username)
    return {       
            "generated_tweet": generated_tweet,  
            "subject": subject, 
            "username": username, 
            "tweets": raw_tweet_list
            }

def validate_input_length(prompt: str):
    if len(prompt) > MAX_INPUT_LENGTH:
        raise HTTPException(
            status_code=400,
            detail=f"Username or Subject length is too long. Must be under {MAX_INPUT_LENGTH} characters.",
        )

