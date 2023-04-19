/*
 * @Author: lihuan
 * @Date: 2023-04-19 22:26:32
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-19 22:54:45
 * @Description:
 */

const RPCClient = require('@alicloud/pop-core').RPCClient

function initVodClient(accessKeyId, accessKeySecret) {
  const regionId = 'cn-shanghai' // 点播服务接入地域
  const client = new RPCClient({
    //填入AccessKey信息
    accessKeyId: accessKeyId,
    accessKeySecret: accessKeySecret,
    endpoint: 'http://vod.' + regionId + '.aliyuncs.com',
    apiVersion: '2017-03-21',
  })

  return client
}

exports.getvod = async (req, res) => {
  // 请求示例
  const client = initVodClient(
    'LTAI5t9YdQFgq7ZPLU3i2KhJ',
    '3UA3H4igZkaeajQbDQGUWPEAjCCPid'
  )

  const vodData = await client.request(
    'CreateUploadVideo',
    {
      Title: 'this is a sample',
      FileName: 'filename.mp4',
    },
    {}
  )

  res.status(200).json({ vod: vodData })
}
