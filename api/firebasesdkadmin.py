import firebase_admin
from firebase_admin import credentials,firestore
import urllib.request
import cv2
import numpy as np
cred = credentials.Certificate("./firebase.json")
firebase_admin.initialize_app(cred,
                                  { "databaseURL":
                                        "https://test-c418a-default-rtdb.firebaseio.com"})
db2 = firestore.client()
c=0

def query():
    d,k={},{}
    doc_ref = db2.collection(u'aman').document(u'photos')
    doc = doc_ref.get()
    if doc.exists:
        k=doc.to_dict()
    for i,j in zip(k.keys(),k.values()):
        d[i]=url_to_image(j)
    return d

def url_to_image (url):
    c=0
    resp = urllib.request.urlopen(url)
    image = np.asarray(bytearray(resp.read()), dtype="uint8")
    image = cv2.imdecode(image, cv2.IMREAD_COLOR)
    try:
        image=cv2.resize(image,(500,500))
    except:
        print('error',url)
    # if c<5:
    #     c=c+1
    #     cv2.imshow("image",image)
    return image

