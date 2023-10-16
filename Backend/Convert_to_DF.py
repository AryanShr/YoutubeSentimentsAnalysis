import re
import pandas as pd

def createDF(data):
    comments = []
    user = []
    for item in data:
        s = re.sub('\\n[0-9]+ (days|weeks|months|years|week|month|year|hours|hour|day|minutes|minute) ago','',item)
        s = re.sub('\\nREPLY','',s)
        s = re.sub('\.\\n[0-9][\.]*[0-9]*[A-Z]*','',s)
        t = s.split('\n')
        t[0] = re.sub('\(edited\)','',t[0])
        user.append(t[0])
        s = "\n".join(t[1:])
        comments.append(s)
    df = pd.DataFrame(comments,index=user,columns=['Comments'])
    return df
