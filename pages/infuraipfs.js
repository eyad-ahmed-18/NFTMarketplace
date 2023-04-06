const { ipfsClient, globSource, create } = require(ipfs - http - client)

const projectId = "2NBnWtNQLe2luNBMfVuxA5SHJHv";
const projectSecret = "a77fb4a46758fcdd2a72e988950948c2";
async function addFile() {
    const auth =
        "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

    const client = await create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth
        }
    })

    for await (const file of client.addAll(globSource("image0.jpeg", "**/*"))) {
        console.log(file)
    }
}

addFile()