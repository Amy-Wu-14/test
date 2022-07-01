let buffer = []

// 修改数组元素类型为File
const todoFile = (list) => {
    for (index = 0; index < list.length; index++) {
        buffer.push(list[index] * Math.random())
    }
}

onconnect = ({ ports: [port, ...ports] }) => {
    port.onmessage = ({ data }) => {
        if (data)
            todoFile(data)
        else {
            port.postMessage(buffer)
        }

    }
}