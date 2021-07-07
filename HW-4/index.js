import { readFileSync, writeFileSync } from 'fs';


const dataForCopy = readFileSync("hello.txt","utf-8")

writeFileSync("hello-copy.txt",`Скопированный текст - ${dataForCopy}`)

