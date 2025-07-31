async function fetchUserData(){
    const data = await fetch('https://dummyjson.com/users')
    // const result = 
    console.log('result : ' , await data.json())
}

// fetchUserData()

async function processUserData(){
    const data = await fetch('https://dummyjson.com/users')
    const result = await data.json()
    const users = result.users
    const maleUsers = users.filter(x=>x.gender=='male')
    // console.log('male Users : ',maleUsers)
    const x = maleUsers.map(user=>[`Name: ${user.firstName}, Age: ${user.age}`])
    console.log(x)
}
processUserData()

