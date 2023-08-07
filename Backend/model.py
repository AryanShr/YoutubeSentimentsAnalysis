from transformers import AutoTokenizer
from transformers import AutoModelForSequenceClassification
from scipy.special import softmax
from transformers import pipeline


def robertaModel():
    MODEL = f"cardiffnlp/twitter-roberta-base-sentiment"
    tokenizer = AutoTokenizer.from_pretrained(MODEL)
    model = AutoModelForSequenceClassification.from_pretrained(MODEL)   
    return model, tokenizer

def robertaPredict(text, model, tokenizer):
    encoded_text = tokenizer(text, return_tensors='pt', padding=True, truncation=True, max_length=512)
    output = model(**encoded_text)
    scores = output[0][0].detach().numpy()
    scores = softmax(scores)
    scores_dict = {
        'roberta_neg' : scores[0],
        'roberta_neu' : scores[1],
        'roberta_pos' : scores[2]
    }
    return scores_dict

def predict_sentiment_from_scores(scores_dict):
    if scores_dict['roberta_neg'] > scores_dict['roberta_neu'] and scores_dict['roberta_neg'] > scores_dict['roberta_pos']:
        return ('Negative', scores_dict['roberta_neg'])
    elif scores_dict['roberta_neu'] > scores_dict['roberta_neg'] and scores_dict['roberta_neu'] > scores_dict['roberta_pos']:
        return ('Neutral', scores_dict['roberta_neu'])
    elif scores_dict['roberta_pos'] > scores_dict['roberta_neg'] and scores_dict['roberta_pos'] > scores_dict['roberta_neu']:
        return ('Positive', scores_dict['roberta_pos'])
    else:
        return ('Neutral', scores_dict['roberta_neu'])

def predict_from_pipeline(text):
    classifier = pipeline('sentiment-analysis')
    result = classifier(text)
    return result

if __name__ == '__main__':
    model, tokenizer = robertaModel()
    text = "I like this book but not the sequel of it"
    scores_dict = robertaPredict(text, model, tokenizer)
    print(scores_dict)
    print(predict_sentiment_from_scores(scores_dict))
    # print(predict_from_pipeline(text))