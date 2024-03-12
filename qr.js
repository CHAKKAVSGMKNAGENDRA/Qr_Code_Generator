let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input=document.getElementById("url").value
    // console.log(input)

    let qrl=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${input}`

    let img=document.querySelector("img")
    img.src=qrl
    img.style.visibility="visible"

})