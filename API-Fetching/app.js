const root = document.getElementById('root')
let apidata = fetch("https://api.github.com/users")

// apidata.then((data)=>{
//     console.log(data.json());
// }
// )

let arrdata=apidata.then((data)=>{
    return data.json();
})

arrdata.then((arr)=>{
    arr.map((ele)=>{
        let {login,avatar_url}=ele
        console.log(login);
        root.innerHTML +=`
        <div class=card>
            <div><img src=${avatar_url}</div>
            <div class=title>${login}</div>
        </div> `
    })
})