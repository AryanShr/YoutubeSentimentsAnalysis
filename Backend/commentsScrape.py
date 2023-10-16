import requests
from bs4 import BeautifulSoup

def scrape_youtube_comments(video_url):
    # Fetch the HTML content of the video page
    response = requests.get(video_url)
    html_content = response.text

    # Parse the HTML using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find the element that contains the comments
    comment_section = soup.find('ytd-comments')

    print(comment_section)

    # Check if the comment section is found
    if comment_section:
        # Extract comments
        comments = [comment.text for comment in comment_section.find_all('yt-formatted-string')]
        return comments
    else:
        print("Comment section not found. YouTube may have updated its structure.")

# Example usage
video_url = 'https://www.youtube.com/watch?v=qA0YcYMRWyI'
comments = scrape_youtube_comments(video_url)

if comments:
    for i, comment in enumerate(comments, start=1):
        print(f"Comment {i}: {comment}")
else:
    print("No comments found.")
