import time
import unittest
import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager

class MyTestCase(unittest.TestCase):
    def test_Facebook_login(self):

        driver = webdriver.Chrome(ChromeDriverManager().install())
        driver.get("http://www.facebook.com")

        assert "Facebook" in driver.title
        user_email = driver.find_element_by_name("email")
        user_password = driver.find_element_by_name("pass")
        user_email.clear()
        user_password.clear()
        user_email.send_keys(os.environ.get('USER'))
        user_password.send_keys(os.environ.get('PASS'))
        user_email.send_keys(Keys.RETURN)

        time.sleep(5)
        tempArr = driver.current_url.split('/')

        print(tempArr)
        assert "checkpoint" in tempArr
        # print("hello")
        # driver.close()


if __name__ == '__main__':
    unittest.main()
