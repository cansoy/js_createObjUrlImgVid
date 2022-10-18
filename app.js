const btnImg=document.querySelector('#img')
const btnVideo=document.querySelector('#video')
const divimg=document.querySelector('#divimg')
const divvideo=document.querySelector('#divvideo')
const imagefile=document.querySelector('#img-file')
const videofile=document.querySelector('#video-file')
const containerImage=document.querySelector('.container-image')
const containerVideo=document.querySelector('.container-video')

const imgObjUrl=async(e)=>{
    const response=await fetch('./db/image.jpg')
    const blob=await response.blob()
    console.log(blob)
    const objUrl=URL.createObjectURL(blob)
    const image=new Image(200,200)
    image.src=objUrl
    divimg.appendChild(image)
}

const videoObjUrl=async(e)=>{
    const response=await fetch('./db/vid_5.mp4')
    const blob=await response.blob()
    console.log(blob)
    const objUrl=URL.createObjectURL(blob)
    const video=document.createElement('video')
    video.width=200
    video.height=200
    video.controls=true
    video.src=objUrl
    divvideo.appendChild(video)
}
btnImg.addEventListener('click',imgObjUrl)
btnVideo.addEventListener('click',videoObjUrl)

imagefile.addEventListener('change',(e)=>{
    const file=imagefile.files[0]
    const filereader=new FileReader()
    filereader.readAsDataURL(file)
    filereader.onload=(ev)=>{
        const result=filereader.result
        const image=new Image(200,200)
        image.src=result
        containerImage.appendChild(image)
    }
})

videofile.addEventListener('change',(e)=>{
    // const file=videofile.files[0]
    const file=e.target.files[0]
    const filereader=new FileReader()
    filereader.readAsDataURL(file)
    filereader.onload=(ev)=>{
        const result=filereader.result
        const video=document.createElement('video')
        video.width=200
        video.height=200
        video.controls=true
        video.src=result
        containerVideo.appendChild(video)
    }

    
})