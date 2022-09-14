const url = 'http://localhost:3000/api/portofolio'

const swiper = new Swiper('.mySwipper', {
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

const cards = document.getElementById("template")

let htmlCode = ''

const loadData = () => {
    $.ajax({
        url:url,
        method:"GET",
        data:{action:'GET'},
        dataType: 'JSON',
        success: (data) => {
            let Data = data.data
            if (Data.length >0) {
                for(let i = 0; i<Data.length; i++){
                    htmlCode += `<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4" id="artikel">
                    <article class="overflow-hidden rounded-lg shadow-lg">
                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="${Data[i].image}">
                        </a>
                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">${Data[i].judul_portofolio}</a>
                            </h1>
                            <p class="text-grey-darker text-sm">
                                ${Data[i].createdAt}
                            </p>
                        </header>
                        <footer class="flex items-center justify-between leading-none p-2 md:p-2">
                            <a class="flex items-left no-underline hover:underline text-black" href="#">
                                <p class="ml-2 text-sm truncate hover:text-clip">${Data[i].deskripsi}</p>
                            </a>
                        </footer>
                    </article>
                </div>`
                }
            }
            $('#template').html(htmlCode)
            
        }
    })
}

const loadGame = () => {
    
    $.ajax(
        {
        url:url+'/category/2',
        method:"GET",
        data:{action:'GET'},
        dataType: 'JSON',
        success: (data) => {
            
            let Data = data.data
            if (Data.length >0) {
                
                for(let i = 0; i<Data.length; i++){
                    htmlCode += `<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4" id="artikel">
                    <article class="overflow-hidden rounded-lg shadow-lg">
                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="${Data[i].image}">
                        </a>
                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">${Data[i].judul_portofolio}</a>
                            </h1>
                            <p class="text-grey-darker text-sm">
                                ${Data[i].createdAt}
                            </p>
                        </header>
                        <footer class="flex items-center justify-between leading-none p-2 md:p-2">
                            <a class="flex items-left no-underline hover:underline text-black" href="#">
                                <p class="ml-2 text-sm truncate hover:text-clip">${Data[i].deskripsi}</p>
                            </a>
                        </footer>
                    </article>
                </div>`
                }
            }
            $('#template').html(htmlCode)
            
        }
    })
}

const kategori = (param) => {
    $(document).ready(()=>{
        switch (param) {
            case 1:
                loadData()
                break;
        
            default:
                break;
        }
    })
    
}

const changeData = () => {
    let s = select.value
    kategori(s)
}

changeData()















