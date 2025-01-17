import fs from "fs"
import { NextResponse } from "next/server"

export async function GET (request: Request) {
    const url = new URL(request.url)
    const path = '.'+url.pathname
    // const path = '.'+url.pathname
    const ext = url.pathname.substring(url.pathname.length-3)
    try{
        console.log('START')

        // console.log(url)
        console.log(path)
        console.log(ext)

        const fd = fs.readFileSync(path)

        console.log('POSLE FD')
        console.log(fd)

        let type = ''
        if (ext == 'jpg' || ext == 'jpeg'){
            type = 'image/jpeg'
            console.log('Found jpeg')
        } else if (ext == 'png'){
            type = 'image/png'
            console.log('Found png')
        } else if (ext == 'mp3'){
            type = 'audio/mpeg'
            console.log('Found mp3')
        }

        // console.log(fd)
        console.log('UPPP')

        return new NextResponse(fd, {status:200, headers:{"Content-type": type}})
    }catch{
        console.log('DOWN')

        return new NextResponse('Not found',{status:404})
    }
}


// import fs from "fs";
// import { NextResponse } from "next/server";

// export async function GET (request: Request) {
//     const url = new URL (request.url)
//     const path = '.'+url.pathname;
//     const ext = url.pathname.substring(url.pathname.length-3)
//     try {
//         const fd = fs.readFileSync(path)
//         let type = '';
//         if(ext == 'jpg' ){
//             type = 'image/jpeg'
//         } else if(ext == 'png'){
//             type = 'image/png'
//         }else if(ext == 'mp3'){
//             type = 'audio/mpeg'
//         }
//         return new NextResponse(fd, {status:200, headers: {"Content-type": type}})

//     }catch{
//         return new NextResponse ( 'Not found', {status: 404})
//     }
// }