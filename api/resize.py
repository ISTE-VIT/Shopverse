import cv2
from firebasesdkadmin import *

image=url_to_image("https://firebasestorage.googleapis.com/v0/b/test-c418a.appspot.com/o/appy%20fizz.png?alt=media&token=4cf535cf-7ebe-4e81-9058-1a944d86ec6c")
print(image.shape)
image=cv2.resize(image,(500,500))
cv2.imshow("image",image)
cv2.waitKey(0)
