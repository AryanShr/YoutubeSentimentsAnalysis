import pandas as pd
from convertDF import get_sentiment

def get_df_analysis(df):
    #  get the sentiment analysis of the comments
    sentiment_analysis = df["Sentiment"].value_counts()
    # get the average time difference between comment and upload time
    average_time_difference = df["Time"].mean()
    # get the number of comments
    number_of_comments = len(df)
    
    return sentiment_analysis, average_time_difference, number_of_comments

# Extract the words from comments for word cloud

