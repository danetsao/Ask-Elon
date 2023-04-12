from fastapi import FastAPI, HTTPException
from askelon import generate_tweets, random_subject, random_username
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)
MAX_INPUT_LENGTH = 20

@app.get("/generate_tweet")
def generate_tweet_api(subject: str, username: str) -> str:
    generated_tweet, raw_tweet_list = generate_tweets(subject, username)
    return {"generated_tweet": generated_tweet, "tweets": raw_tweet_list, "subject": subject, "username": username}

#Generate tweet from given username for a random subject
@app.get("/generate_tweet_random_subject")
def generate_tweet_random_subject_api(username: str) -> str:
    subject = random_subject()
    generated_tweet, raw_tweet_list = generate_tweets(subject, username)
    return {"generated_tweet": generated_tweet, "tweets": raw_tweet_list, "subject": subject, "username": username}

@app.get("/generate_tweet_random_subject")
def generate_tweet_random_everything_api() -> str:
    subject = random_subject()
    username = random_username()
    generated_tweet, raw_tweet_list = generate_tweets(subject, username)
    return {"generated_tweet": generated_tweet, "tweets": raw_tweet_list, "subject": subject, "username": username}

def validate_input_length(prompt: str):
    if len(prompt) > MAX_INPUT_LENGTH:
        raise HTTPException(
            status_code=400,
            detail=f"Username or Subject length is too long. Must be under {MAX_INPUT_LENGTH} characters.",
        )

