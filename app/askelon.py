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
    """" 
        PAUSED THIS FUNCTIONALITY WHILE TWINT IS BROKEN
        json_tweets = search_tweets(subj, username)
    """
    
    json_tweets = STATIC_JSON_TWEETS

    if json_tweets == []:
        return "No tweet availible, try again later", {}
    
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
#To parse data
def parse_data(tweets: List[str]) -> List[str]:
    word_bank = []
    for tweet in tweets:
        tweet = remove_punctuation(tweet)
        tweet = tweet.split()  
        for word in tweet:
            word = word.lower()
            if not validate_word(word) and not_a_link(word):
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
    c.Store_object_tweets_list = res
    twint.run.Search(c)
    return res

def parse_json_tweets(json_tweets) -> List[str]:
    tweets = []
    for r in json_tweets:
        tweets.append(r["tweet"])
    return tweets

def random_subject() -> str:
    index = randint(0, len(RANDOM_SUBJECT_LIST))
    return RANDOM_SUBJECT_LIST[index]

def random_username() -> str:
    index = randint(0, len(RANDOM_USERNAME_LIST))
    return RANDOM_USERNAME_LIST[index]

RANDOM_SUBJECT_LIST = [ "Coffee", "Adventure", "Dream", "Love", "Music", "Food", "Technology", "Nature", "Fitness", "Success", "Fashion", "Art", "Humor", "Family", "Relationships", "Travel", "Motivation", "Creativity", "Self-care", "Health", "Education", "Inspiration", "Career", "Friendship", "Goals", "Happiness", "Mindfulness", "Book", "Film", "Entrepreneurship", "Money", "Business", "Writing", "Learning", "Productivity", "Leadership", "Innovation", "Passion", "Environment", "Design", "Change", "Volunteering", "Science", "Sports", "Kindness", "Community", "Animals", "Social Media", "Photography", "Gardening", "Gratitude", "Cooking", "Peace", "Meditation", "Charity", "Fitness", "Yoga", "Beauty", "Fashion", "Veganism", "Climate", "Cycling", "Running", "Swimming", "Artificial Intelligence", "Space", "Blockchain", "Cryptocurrency", "Marketing", "Spirituality", "Parenthood", "Sustainability", "Wellness", "Reading", "Philosophy", "Culture", "Friendship", "Adventure", "Equality", "Hobbies", "Fun", "Sharing", "Learning", "Challenge", "Curiosity", "Communication", "Diversity", "Faith", "Hope", "Belief"]
RANDOM_USERNAME_LIST = [  "elonmusk",  "TheEllenShow",  "BarackObama",  "KatyPerry",  "YouTube",  "KimKardashian",  "taylorswift13",  "Cristiano",  "realDonaldTrump",  "ladygaga",  "jtimberlake",  "NASA",  "Oprah",  "nytimes",  "KevinHart4real",  "BillGates",  "CNN",  "KingJames",  "jimmyfallon",  "NICKIMINAJ",  "ArianaGrande",  "BrunoMars",  "HillaryClinton",  "narendramodi",  "EmmaWatson",  "SportsCenter",  "SethMacFarlane",  "Drake",  "TheRock",  "johncena",  "justinbieber",  "Google",  "elonmusk",  "Reuters",  "LeoDiCaprio",  "BBCBreaking",  "shakira",  "ConanOBrien",  "NASA_Johnson",  "WarrenBuffett",  "jimmykimmel",  "MileyCyrus",  "NickCannon",  "BillClinton",  "BBCWorld",  "KimKardashian",  "iamsrk",  "andersoncooper",  "kobebryant",  "TheEconomist",  "StephenAtHome",  "nfl",  "MichelleObama",  "neiltyson",  "Snapchat",  "Adele",  "TIME",  "jason_mraz",  "GMA",  "MichaelPhelps",  "nprnews",  "ChelseaClinton",  "AliciaKeys",  "selenagomez",  "TheOnion",  "AP",  "EvaLongoria",  "aplusk",  "cnnbrk",  "Kaepernick7",  "JoeBiden",  "TheAtlantic",  "NASA_Mars",  "BreakingNews",  "MarkZuckerberg",  "justintimberlake",  "WhiteHouse",  "ABC",  "KendallJenner",  "Disney",  "CaraDelevingne",  "piersmorgan",  "KellyOsbourne",  "McDonalds",  "blakeshelton",  "katyperry",  "SnoopDogg",  "cnni",  "SHAQ",  "HuffPost",  "TheGRAMMYs",  "jack",  "GoogleMaps",  "MindyKaling",  "BBCNews",  "TIME",  "Ciara",  "kanyewest",  "TheDemocrats"]
STATIC_JSON_TWEETS = [
    {
      "username": "elonmusk",
      "tweet": "Mars is looking good today #SpaceX",
      "timestamp": "2 hours ago",
      "avatar": "https://pbs.twimg.com/profile_images/1411444620079907841/Pt-pI5n5_400x400.jpg"
    },
    {
      "username": "BillGates",
      "tweet": "I'm excited to share that my new book 'How to Avoid a Climate Disaster' is out today. I hope you'll check it out!",
      "timestamp": "5 hours ago",
      "avatar": "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg"
    },
    {
      "username": "TheEllenShow",
      "tweet": "Hey y'all, I'm excited to announce that I'm starting a new podcast! It's called 'Ellen on the Go' and it's all about my favorite moments from The Ellen Show. Check it out!",
      "timestamp": "1 day ago",
      "avatar": "https://pbs.twimg.com/profile_images/1019004248208553473/nmGlkUmK_400x400.jpg"
    }
]
  

if __name__ == '__main__':
    if 1 <= 2:
        main("china", "elonmusk")
    else:
        main(sys.argv[1], sys.argv[2])
