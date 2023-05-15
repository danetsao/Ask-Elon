# IMPORTANT NOTE

This Project has been put on pause due to signifacant changes to the Twitter API. [Source](https://gist.github.com/moxak/ed83dd4169112a0b1669500fe855101a)


# Ask Elon
This is a tweet generating app that scrape users tweets and chains them into a unique fun tweet! Try it out yourself, live version coming soon.
#### Backend Stack

| Type      | Tech                                                         |
| --------- | ------------------------------------------------------------ |
| Language  | [Python](https://www.python.org/)                            |
| Framework | [FastAPI](https://fastapi.tiangolo.com/)                     |
| Hosting   | [Vercel](https://vercel.com)                                 |
| Other     | [Twint](https://github.com/twintproject/twint)|

#### Frontend Stack

| Type      | Tech                                                         |
| --------- | ------------------------------------------------------------ |
| Language  | [Typescript](https://www.typescriptlang.org/)                |
| Framework | [NextJS](https://nextjs.org/) / [React](https://reactjs.org/) |
| Styling   | [TailwindCSS](https://tailwindcss.com/)                      |
| Hosting   | [Vercel](https://vercel.com)                                 |

## Try it yourself

### Hosted via vercel here

[API](https://ask-elon-api.vercel.app/)
[SITE](https://ask-elon-site.vercel.app/)

### Or run locally

Clone the project

```bash
  git clone https://github.com/danetsao/Ask-Elon.git
```

Split your terminal
### App Terminal

```bash
  cd app
```
Download dependancies

```bash
  pip install -r requirements.txt
```
Start server with Uvicorn
```bash
  uvicorn askelon_api:app
```
### Site Terminal

```bash
  cd site
```
Download dependancies

```bash
  yarn i
```
Start server with yarn
```bash
  yarn dev
```

