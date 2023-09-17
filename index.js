// const url="//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf%202&key=AIzaSyCpVfnofucSZgS7HT4Pe2B6PD-c76TLpZU";
const showpopular =async ()=>{
    const url1=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=Wonderful India&key=AIzaSyCpVfnofucSZgS7HT4Pe2B6PD-c76TLpZU`;
    let res= await fetch(url1);
    let popular=await res.json();
    appendpopular(popular.items);
}
showpopular();
const appendpopular=(data)=>{
    let bag=document.getElementById("videos");
    let container=document.createElement("div");
    container.setAttribute("id","popularvideos");
    container.innerHTML="";
    data.forEach(({id:{videoId},snippet:{thumbnails:{medium},title}})=>{
        const videoLink=`https://youtu.be/${videoId}`;
        let box=document.createElement("div");
        box.setAttribute("class","popularvideobox");
        let video={
            videoId,
            title,
        }
        box.addEventListener("click",()=>{
            console.log(video)
            viewVideo(video);
        })
        let thumbnail=document.createElement("img");
        thumbnail.setAttribute("class","thumbnail_mid");
        thumbnail.src=medium.url;
        let details=document.createElement("div");
        details.setAttribute("class","vid_details");
        let vid_title=document.createElement("p");
        vid_title.innerText=title;
        details.append(vid_title);
        box.append(thumbnail,details);
        container.append(box);
    })
    bag.append(container);
}
const showVideos =async ()=>{
    console.log("hii");
    let input=document.getElementById("searchbar").value;
    const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}%202&key=AIzaSyCpVfnofucSZgS7HT4Pe2B6PD-c76TLpZU`;
    let res= await fetch(url);
    let data=await res.json();
    console.log(data.items);
    append(data.items);
}
const append=(data)=>{
    let container=document.getElementById("videos");
    container.innerHTML="";
    data.forEach(({id:{videoId},snippet:{thumbnails:{medium},title}})=>{
        const videoLink=`https://youtu.be/${videoId}`;
        let box=document.createElement("div");
        box.setAttribute("class","videobox");
        let video={
            videoId,
            title,
        }
        box.addEventListener("click",()=>{
            console.log(video)
            viewVideo(video);
        })
        let thumbnail=document.createElement("img");
        thumbnail.setAttribute("class","thumbnail_mid");
        thumbnail.src=medium.url;
        let details=document.createElement("div");
        details.setAttribute("class","vid_details");
        let vid_title=document.createElement("h3");
        vid_title.innerText=title;
        details.append(vid_title);
        box.append(thumbnail,details);
        container.append(box);
    })
}
const viewVideo=(x)=>{
    window.location.href="view.html";
    localStorage.setItem("video",JSON.stringify(x));
}