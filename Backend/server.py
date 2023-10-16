from flask import Flask, request, jsonify
from flask_cors import CORS
from convertDF import get_sentiment
from youtubeAPI import get_video_data
import pandas

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api', methods=['POST'])
def api():
    data = request.get_json()
    print(data)
    df = get_sentiment(data["id"])
    # drop AuthorName and Comments columns
    # df = df.drop(columns=['AuthorName', 'Comments'])
    return jsonify(df.to_json(orient='records'))

@app.route('/getVideoData', methods=['GET'])
def getVideoData():
    data = request.args.get('id')
    print(data)
    response = get_video_data(data)
    
    # get channel name, video title, video description, video thumbnail, video publish date
    channelName = response["items"][0]["snippet"]["channelTitle"]
    videoTitle = response["items"][0]["snippet"]["title"]
    # videoThumbnail = response["items"][0]["snippet"]["thumbnails"]["high"]["url"]
    videoPublishDate = response["items"][0]["snippet"]["publishedAt"]
    # return jsonify({"message":videoPublishDate})
    # return jsonify({"channelName": channelName, "videoTitle": videoTitle, "videoDescription": videoDescription, "videoThumbnail": videoThumbnail, "videoPublishDate": videoPublishDate})
    return jsonify({"channelName": channelName, "videoTitle": videoTitle, "videoPublishDate": videoPublishDate})

if __name__ == '__main__':
    app.run(debug=True)