from firebasesdkadmin import *

l=list()
dict=dict()
l1=list()

def call(url):
    pics=query()
    l = []
    good = []
    img_cam = url_to_image(url)

    for i,j in zip(pics.keys(),pics.values()):
        '''
        pics-dictionary
        i-keys
        j-values
        '''
        img_db = j
        orb = cv2.ORB_create(nfeatures=150)
        kp1, des1 = orb.detectAndCompute(img_cam, None)
        kp2, des2 = orb.detectAndCompute(img_db, None)
        bf = cv2.BFMatcher()
        matches = bf.knnMatch(des1, des2, k=2)
        for m, n in matches:
            if m.distance < 0.85 * n.distance:
                good.append(m)
        l.append({'name':i,'matches':len(good)})
        # print(l,"\n")
    l=sorted(l,key=lambda i:i['matches'],reverse=True)
    print(l)
    return l[0]['name'],l[1]['name']

# features 300, dist 0.70 works okay with train but not with random

