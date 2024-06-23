import face_recognition
import cv2
import numpy as np
import csv
import os
from datetime import datetime
 
video_capture = cv2.VideoCapture(0)
 
jobs_image = face_recognition.load_image_file("./photos/ambhani.jpeg")
jobs_encoding = face_recognition.face_encodings(jobs_image)[0]
 
ratan_tata_image = face_recognition.load_image_file("./photos/ratantata.jpeg")
ratan_tata_encoding = face_recognition.face_encodings(ratan_tata_image)[0]
 
sadmona_image = face_recognition.load_image_file("./photos/kalam.jpeg")
sadmona_encoding = face_recognition.face_encodings(sadmona_image)[0]
 
tesla_image = face_recognition.load_image_file("./photos/elonmusk.jpeg")
tesla_encoding = face_recognition.face_encodings(tesla_image)[0]
 
suprasanna = face_recognition.load_image_file("./photos/Suprasanna.jpeg")
suprasanna_encoding = face_recognition.face_encodings(suprasanna)[0]

devika_image = face_recognition.load_image_file("./photos/devika.jpeg")
devika_encoding = face_recognition.face_encodings(devika_image)[0]

srihitha_image = face_recognition.load_image_file("./photos/srihitha.jpeg")
srihitha_encoding = face_recognition.face_encodings(srihitha_image)[0]


known_face_encoding = [
jobs_encoding,
ratan_tata_encoding,
sadmona_encoding,
tesla_encoding,
suprasanna_encoding,
devika_encoding,
srihitha_encoding
]
 
known_faces_names = [
"ambhani",
"ratantata",
"kalam",
"elonmusk",
"suprasanna",
"devika",
"srihitha"
]
 
students = known_faces_names.copy()
 
face_locations = []
face_encodings = []
face_names = []
s=True
 
 
now = datetime.now()
current_date = now.strftime("%Y-%m-%d")
 
print(current_date)
 
f = open(current_date+'.csv','w+',newline = '')
lnwriter = csv.writer(f)
 
while True:
    _,frame = video_capture.read()
    small_frame = cv2.resize(frame,(0,0),fx=0.25,fy=0.25)
    rgb_small_frame = small_frame[:,:,::-1]
    if s:
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame,face_locations)
        face_names = []
        for face_encoding in face_encodings:
            matches = face_recognition.compare_faces(known_face_encoding,face_encoding)
            name=""
            face_distance = face_recognition.face_distance(known_face_encoding,face_encoding)
            best_match_index = np.argmin(face_distance)
            if matches[best_match_index]:
                name = known_faces_names[best_match_index]
 
            face_names.append(name)
            if name in known_faces_names:
                font = cv2.FONT_HERSHEY_SIMPLEX
                bottomLeftCornerOfText = (10,100)
                fontScale              = 1.5
                fontColor              = (255,0,0)
                thickness              = 3
                lineType               = 2
 
                cv2.putText(frame,name+' Present', 
                    bottomLeftCornerOfText, 
                    font, 
                    fontScale,
                    fontColor,
                    thickness,
                    lineType)
 
                if name in students:
                    students.remove(name)
                    print(students)
                    current_time = now.strftime("%H-%M-%S")
                    lnwriter.writerow([name,current_time])
    cv2.imshow("attendence system",frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
 
video_capture.release()
cv2.destroyAllWindows()
f.close()