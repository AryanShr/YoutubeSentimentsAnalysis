
import time
from selenium import webdriver
from selenium.webdriver import Chrome 
from selenium.webdriver.common.by import By 
from selenium.webdriver.common.keys import Keys 
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def ScrapComments(path):
  authors = []                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  try:
    # Configuring the ChromeDriver
    options = webdriver.ChromeOptions()
    options.add_argument('-headless')
    options.add_argument('-no-sandbox')
    options.add_argument('-disable-dev-shm-usage')
    #wd = webdriver.Chrome('chromedriver',chrome_options=options)
    driver =webdriver.Chrome('chromedriver',chrome_options=options)
    wait = WebDriverWait(driver,15)
    driver.get(path)
    
    # Expanding Comments 6 times to load atleast 100 comments
    for item in range(6):
      wait.until(EC.visibility_of_element_located((By.TAG_NAME,"body"))).send_keys(Keys.END)
      time.sleep(5)
    
    # Scrapping all the comments and their author
    for author in wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME,"style-scope ytd-comment-renderer"))):
      authors.append(author.text)
    
  except Exception as e:
    print(e)
  return authors

if __name__ == "__main__":
    data = ScrapComments("https://www.youtube.com/watch?v=AE3iXR1JFak")
    print(data)