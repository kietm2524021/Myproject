const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bảng Thông Tin</title>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: left;
            }
        </style>
    </head>
    <body>

    

    <table>
        <tr>
            <th>MSHV</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Quê quán</th>
            <th>Email</th>
            <th>SĐT</th>
        </tr>
        <tr>
            <td>M2524021</td>
            <td>Huỳnh Tuấn Kiệt</td>
            <td>01/01/2002</td>
            <td>Bình Dương</td>
            <td>k@gmail.com</td>
            <td>0756378312</td>
        </tr>
        <tr>
        <td>M2524024</td>
        <td>Vương Cẩm Thanh</td>
        <td>01/01/2002</td>
        <td>Bình Dương</td>
        <td>t@gmail.com</td>
        <td>0756378312</td>
        </tr>
    </table>

    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});
