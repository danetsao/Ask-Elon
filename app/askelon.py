import numpy as np
from random import randint
from typing import List
import twint
import os
import sys

def main(subj: str, username: str) -> str:
    tweet = generate_tweets(subj, username)
    return tweet

def generate_tweets(subj: str, username: str) -> str:
    json_tweets = search_tweets(subj, username)
    tweets_list = parse_json_tweets(json_tweets)
    word_bank = parse_data(tweets_list)
    finalTweet = markov_data(word_bank)
    print(finalTweet)
    return finalTweet, json_tweets

def markov_data(word_bank) -> str:
    #Make pairs of random word pointing to next word
    def make_pairs(word_bank):
        for i in range(len(word_bank)-1):
            yield (word_bank[i], word_bank[i+1])
    
    pairs = make_pairs(word_bank)

    word_dict = {}

    for word_1, word_2 in pairs:
        if word_1 in word_dict.keys():
            word_dict[word_1].append(word_2)
        else:
            word_dict[word_1] = [word_2]
    if len(word_bank) == 0:
        return "Try again, no tweets found."
    a = randint(0, (len(word_bank)-1))
    
    first_word = word_bank[a]

    chain = [first_word]
    #Can change size, I find this to be nice length of tweet
    num_words = randint(5, 12)

    for i in range(num_words):
        chain.append(np.random.choice(word_dict[chain[len(chain)-1]]))

    res = ' '.join(chain)

    punctuation = ['.', '!', '?', '...']

    rand_punctuation = randint(0, 3)

    return(res.capitalize() + punctuation[rand_punctuation])

def parse_data(tweets: List[str]) -> List[str]:
    word_bank = []
    for tweet in tweets:
        tweet = remove_punctuation(tweet)
        tweet = tweet.split()  
        for word in tweet:
            word = word.lower()
            if not validate_word(word):
                word_bank.append(word)
    return word_bank

def validate_word(w: str) -> bool:
    if (chr(97) > w[0] or w[0] > chr(122)) and not_a_link(w):
        return True
    return False

def remove_punctuation(w: str) -> str:
    w = w.replace(',', '')
    w = w.replace('!', '')
    w = w.replace('.', '')
    return w

def not_a_link(w: str) -> bool:
    if len(w) <= 3:
        return True
    if w[0] == "h" and w[1] == "t":
        return False
    return True

def search_tweets(subj: str, username:str) -> List[str]:

    res = []
    c = twint.Config()
    c.Username = username
    c.Search = subj
    c.Hide_output = True
    c.Store_object = True
    c.Retries_count = 5
    c.Store_object_tweets_list = res
    for _ in range(100):
        if res != []:
            break
        twint.run.Search(c)

    return res

def parse_json_tweets(json_tweets: List[object]):
    tweets = []
    for r in json_tweets:
        tweets.append(r.tweet)
    return tweets

def random_subject() -> str:
    return "china"

def random_username() -> str:
    return "elonmusk"

if __name__ == "__main__":
    if 1 <= 2:
        main("china", "elonmusk")
    else:
        main(sys.argv[1], sys.argv[2])
