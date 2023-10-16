import pandas as pd 
import youtubeAPI as yt
from model import robertaPredict, predict_sentiment_from_scores, robertaModel

def create_df_author_comments(response):
  authorname = []
  comments_text = []
  time = []
  for item in response:
      authorname.append(item["snippet"]["topLevelComment"]["snippet"]["authorDisplayName"])
      comments_text.append(item["snippet"]["topLevelComment"]["snippet"]["textOriginal"])
      time.append(item["snippet"]["topLevelComment"]["snippet"]["publishedAt"])
  df = pd.DataFrame({"AuthorName": authorname, "Comments": comments_text, "Time": time})
  return df

def get_sentiment(id):
  model, tokenizer = robertaModel()
  response = yt.google_api(id)
  # get video upload time
  # uploadTime = yt.get_video_data(id)
  # uploadTime = uploadTime["items"][0]["snippet"]["publishedAt"]
  # uploadTime = pd.to_datetime(uploadTime)
  df = create_df_author_comments(response)
  df["Sentiment"] = df["Comments"].apply(lambda x: predict_sentiment_from_scores(robertaPredict(x, model, tokenizer))[0])
  # get time difference between comment and upload time in seconds
  # df["Time"] = pd.to_datetime(df["Time"])
  # df["Time"] = (df["Time"] - uploadTime).dt.total_seconds()
  # df = df.drop(columns=['AuthorName', 'Comments'])
  # get the time in only days
  df["Time"] = pd.to_datetime(df["Time"]).dt.date
  return df 

def get_df_analysis(df):
  #  get the sentiment analysis of the comments
  sentiment_analysis = df["Sentiment"].value_counts()
  # get the average time difference between comment and upload time
  average_time_difference = df["Time"].mean()
  # get the number of comments
  number_of_comments = len(df)

  return sentiment_analysis, average_time_difference, number_of_comments

if __name__ == "__main__":
  id = "FAjfVcl2L74" 
  df = get_sentiment(id)

  # sentiment_analysis, average_time_difference, number_of_comments = get_df_analysis(df)
  # print(sentiment_analysis)
  # print(average_time_difference)
  # print(number_of_comments)
  print(df)