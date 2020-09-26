$.ajax({
    url: 'https://github-trending-api.now.sh/repositories',
    success: response => {
        console.log(response[8].language)
        console.log(response[17].language)
        console.log(response[19].language)
        console.log(response[20].language)
        console.log(response[18].language)

        let datas = `<thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Description</th>
                            <th scope="col">Language</th>
                        </tr>
                    </thead>`
        response.forEach(item => {
            datas += `<tbody>
                        <tr>
                            <td>${item.author}</td>
                            <td>${item.description}</td>
                            <td>${item.language}</td>
                        </tr>
                    </tbody>`
        })

        $('.datas-container').html(datas)
    }
});