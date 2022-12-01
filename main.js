const { sleep } = require('@onceindustry/test-pkg')

async function main() {
    console.log('before sleep')
    await sleep(1000)
    console.log('after sleep')
}

main()