import fs from "fs";
import { NextResponse } from "next/server";
export async function GET (request: Request) {
    const url = new URL(request.url)
    const path = '.'+url.pathname;
    const ext = url.pathname.substring(url.pathname.length-3)
    try{
        const fd = fs.readFileSync(path)
        let type = '';
        if(ext == 'jpg'){
            type = 'image/jpeg'
        }else if(ext == 'png'){
            type = 'image/png'
        }else if(ext == 'mp3'){
            type = 'audio/mpeg'
        }
        return new NextResponse(fd, {status:200, headers:{"Content-type": type}})
    }catch{
        return new NextResponse('Not found',{status:404})
    }
}