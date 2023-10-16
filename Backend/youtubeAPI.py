import os
import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors

def google_api(id, max_results=None):
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    DEVELOPER_KEY = "AIzaSyDNb5XytLE27NpS42_wmA8u0X0KeaWrOxM"
    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, developerKey = DEVELOPER_KEY)
    comments = []
    next_page_token = None

    while True:
        request = youtube.commentThreads().list(
            part="id,snippet",
            # maxResults=100 if max_results is None else min(max_results - len(comments), 100),
            order="relevance",
            videoId=id,
            pageToken=next_page_token
        )
        response = request.execute()
        comments.extend(response["items"])

        next_page_token = response.get("nextPageToken")
        if not next_page_token or (max_results is not None and len(comments) >= max_results):
            break
    print(len(comments))
    return comments

def get_video_data(id):
    scopes = ["https://www.googleapis.com/auth/youtube.readonly"]
    api_service_name = "youtube"
    api_version = "v3"
    DEVELOPER_KEY = "AIzaSyDNb5XytLE27NpS42_wmA8u0X0KeaWrOxM"
    # Get credentials and create an API client
    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, developerKey = DEVELOPER_KEY)

    request = youtube.videos().list(
        part="snippet",
        id=id
    )
    response = request.execute()

    # print(response)
    return response

if __name__ == "__main__":
    print(len(google_api("bC36d8e3bb0")))
    # print(get_video_data("9bZkp7q19f0"))